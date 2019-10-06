import { Component, OnInit } from "@angular/core";

@Component({
  // selector: "[app-servers]",
  // selector: ".app-servers",
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverValue = "";
  serverExists = false;
  servers = ["Azeem", "Sohail", "Ghouse"];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverExists = true;
    this.servers.push(this.serverValue);
    this.serverCreationStatus =
      "Server was created Name of the server is " + this.serverValue;
  }
  nameChangeHandler(event: Event) {
    this.serverValue = (<HTMLInputElement>event.target).value;
  }
}
