import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';
import {DomSanitizer} from '@angular/platform-browser';
import { MembersService } from 'src/app/_services/members.service';
import { ToastrService } from 'ngx-toastr';
import { PresenceService } from 'src/app/_services/presence.service';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  @Input() member: Member;

  constructor(private sanitizer: DomSanitizer, private memberService: MembersService, private toastr: ToastrService,
              public presence: PresenceService) { }

  ngOnInit(): void {
  }

  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  addLike(member: Member) {
    this.memberService.addLike(member.userName).subscribe(() => {
      this.toastr.success('You have liked ' + member.knownAs);
    });
  }

}
