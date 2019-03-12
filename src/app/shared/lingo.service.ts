declare var RecordRTC: any;
import { Injectable } from '@angular/core';
import { Aunit } from '../aunit/aunit';

@Injectable({
  providedIn: 'root'
})
export class LingoService {
  private _recorder: any;
  private _audioBlobUrl: any


  public startRecording() {
    navigator.mediaDevices.getUserMedia({
      'audio': true
    }).then((stream) => {
        this._recorder = RecordRTC(stream, { type: 'audio/webm', audioBitsPerSecond: '128000' })
        console.log(this._recorder)
      this._recorder.startRecording()
    })
  }


   public stopRecording(autoplay: boolean, source?: Aunit) {
    this._recorder.stopRecording(() => {
      this._audioBlobUrl = this._recorder.toURL();

      
      if (autoplay) {
        let fsound = new Audio(this._audioBlobUrl)
        fsound.addEventListener('ended', ()=> new Audio(source.audioUrl).play())
        fsound.play()
      }
    })
  }

  public playRecording() {
    new Audio(this._audioBlobUrl).play()
  }

  get recorder() {
    return this._recorder
  }
  constructor() { }
}
