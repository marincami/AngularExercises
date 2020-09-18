import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created !!';
  serverName = 'TestServer';
  userName = '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];
  showSecret = false;
  log = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created :), Name is' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (event.target as HTMLInputElement).value;
  }

  onUpdateUserName(event: any) {
    this.userName = (event.target as HTMLInputElement).value;
  }

  onToogleDetails() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
