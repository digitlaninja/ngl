import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  private _activeServers: string;
  public serverCreationStatus: string;
  public serverName: string;
  public serverCreated: boolean = false;
  public username: string = '';
  public showDetails: boolean = false;

  servers: string[] = ['Server 1', 'Server 2'];
  logs: string[] = [];
  constructor() {
    this.serverName = 'Test Server';
  }

  getActiveServers(): string {
    return this._activeServers;
  }

  onCreateServer() {
    this.logTimeStamp('Add Server', new Date());
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = `Server with name ${this.serverName} was created!`;
  }

  onSubmit() {
    this.username = '';
  }

  onDisplayDetails() {
    this.showDetails = !this.showDetails;
    this.logTimeStamp('Display Details', new Date());
  }

  private logTimeStamp(event, date) {
    const entry = `${event} : ${date}`;
    this.logs.push(entry);
  }
}
