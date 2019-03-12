declare var WaveSurfer: any;

import { Component, OnInit } from '@angular/core';
import { LingoService } from '../shared/lingo.service';
import { Aunit } from './aunit';
@Component({
  selector: 'app-aunit',
  templateUrl: './aunit.component.html',
  styleUrls: ['./aunit.component.css']
})
export class AunitComponent implements OnInit {
  wavesurfer // experimental
  aunit: Aunit
  checked = true
  isAutoPlaySource: boolean
  isBlobAvailable = false //# TODO

  constructor(public ls: LingoService) { }
  play() {
    this.wavesurfer.play()
  }
  start() {
    this.ls.startRecording()
  }

  stop() {
    this.ls.stopRecording(this.checked, this.aunit)
    console.log(this.ls.recorder.blob)
    this.isBlobAvailable = this.ls.recorder.blob == true;
  }
  repeat() {
    this.ls.playRecording()
  }
  playSource() {
    // new Audio(this.aunit.audioUrl).play()
    this.wavesurfer.play()
  }
  onClick() {
    if (!this.ls.recorder) {
      console.log('not init')
      this.start()
    } else {
      this.ls.recorder.state === 'recording' ? this.stop() : this.start()
    }
  }

  push() {
    console.log(this.ls.recorder.getBlob())
    this.aunit.userRecord = this.ls.recorder.getBlob()
  }
  ngOnInit() {
    this.aunit = {
      id: 0,
      title: 'nie wymyśliełem jeszcze co z tym zrobić',
      audioUrl: "assets/polsentence.mp3",
      userRecord: undefined

    }
    this.wavesurfer = WaveSurfer.create({
      container: '#waveform',
      height: 80,
    });
    this.wavesurfer.load(this.aunit.audioUrl)
  }

}
