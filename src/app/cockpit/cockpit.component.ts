import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @ViewChild('serverContentInput')
  serverContentInput: ElementRef;
  @Output()
  serverCreated = new EventEmitter<{ serverName: string; serverContent: string }>();
  // tslint:disable-next-line:no-output-rename
  @Output('onBpCreated')
  bluePrintCreated = new EventEmitter<{ serverName: string; serverContent: string }>();
  constructor() {}

  ngOnInit() {}

  onAddServer(nameInput: HTMLInputElement) {
    console.log(this.serverContentInput);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    // this.bluePrintCreated.emit({ serverName: nameInput.value, serverContent: this.newServerContent });
  }
}
