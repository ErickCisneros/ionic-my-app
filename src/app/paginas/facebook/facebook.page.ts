import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/interfaces/card';
import { FacebookService } from 'src/app/servicios/facebook.service';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.page.html',
  styleUrls: ['./facebook.page.scss'],
})
export class FacebookPage implements OnInit {

  cards: Observable<Card[]> = this.facebookService.getFacebookData()

  @ViewChildren('player') videoPlayers: QueryList<any>
  currentPlaying = null

  stickyVideo: HTMLVideoElement = null
  stickyPlaying = false
  @ViewChild('stickyplayer', { static: false }) stickyPlayer: ElementRef;

  constructor(
    private facebookService: FacebookService,
    private render: Renderer2
  ) { }

  ngOnInit() {
  }

  didScroll(event) {
    if (this.currentPlaying && this.isElementInViewPort(this.currentPlaying)) {
      return
    } else if (this.currentPlaying && !this.isElementInViewPort(this.currentPlaying)) {
      this.currentPlaying.pause()
      this.currentPlaying = null
    }

    this.videoPlayers.forEach(player => {
      if (this.currentPlaying) {
        return
      }

      const nativeElement = player.nativeElement
      const inView = this.isElementInViewPort(nativeElement)

      if (this.stickyVideo && this.stickyVideo.src == nativeElement.src) {
        return
      }

      if (inView) { 
        this.currentPlaying = nativeElement
        this.currentPlaying.muted = true
        this.currentPlaying.play()
      }
    })
  }

  openFullScreen(element) {
    console.log(element)
    if (element.requestFullscreen) {
      element.requestFullscreen()
    } else if (element.webkitEnterFullscreen) {
      element.webkitEnterFullscreen()
      element.enterFullscreen()
    }
  }

  playOnSide(element) {
    if (this.stickyVideo) {
      this.render.removeChild(this.stickyPlayer.nativeElement, this.stickyVideo)
    }
    this.stickyVideo =  element.cloneNode(true)

    this.render.appendChild(this.stickyPlayer.nativeElement, this.stickyVideo)

    if (this.currentPlaying) {
      const playPosition = this.currentPlaying.currentTime
      this.currentPlaying.pause()
      this.currentPlaying = null
      this.stickyVideo.currentTime = playPosition
    }

    this.stickyVideo.muted = false
    this.stickyVideo.play()
    this.stickyPlaying = true
  }

  isElementInViewPort(element) {
    const rect = element.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  closeSticky() {
    if (this.stickyVideo) {
      this.render.removeChild(this.stickyPlayer.nativeElement, this.stickyVideo)
      this.stickyVideo = null
      this.stickyPlaying = false
    }
  }

  playOrPauseSticky() {
    if (this.stickyPlaying) {
      this.stickyVideo.pause()
      this.stickyPlaying = false
    } else {
      this.stickyVideo.play()
      this.stickyPlaying = true
    }
  }

}
