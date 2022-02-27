# Client-Server Model

## High Level View

![High Level View of Client-Server Model Photo 1](https://github.com/TommyMynnSon/AlgoExpert-Personal-Notes/blob/main/systems-expert/images/3_client_server_model_photo_1.png)

## Key Terms

Client
- A machine or process that requests data from a server
- Note that a single machine or piece of software can be both a client and a server at the same time. For instance, a single machine could act as a server for end users and as a client for a database

Server
- A machine or process that provides data or service for a client, usually by listening for incoming network calls
- Note that a single machine or piece of software can be both a client and a server at the same time. For instance, a single machine could act as a server for end users and as a client for a database

Client-Server Model
- The paradigm by which modern systems are designed, which consists of clients requesting data or service from servers and servers providing data or service to clients

IP Address
- An address given to each machine connected to the public internet. IPv4 addresses consist of four numbers separated by dots: <b>a.b.c.d</b> where all four numbers are between 0 and 255
- There are IPv4 addresses reserved for special purposes
  - <b>127.0.0.1</b>: Your own local machine which is also referred to as <b>localhost</b>
  - <b>192.168.x.y</b>: Your private network. For instance, your machine and all machines on your private wifi network will usually have the <b>192.168</b> prefix

Port
- In order for multiple programs to listen for new network connections on the same machine without colliding, they pick a <b>port</b> to listen on. A port is an integer from 0 and 65,535 (2^16 ports total)
- Typically, ports 0 - 1023 are reserved for system ports (also called <i>well-known</i> ports) and shouldn't be used by user-level processes. Certain ports have pre-defined uses, and although you usually won't be required to have them memorized, they can sometimes come in handy.
  - 22: Secure Shell
  - 53: DNS Lookup
  - 80: HTTP
  - 443: HTTPS

DNS
- Short for Domain Name System, it describes the entities and protocols involved in the translation from domain names to IP Addresses. Typically, machines make a DNS query to a well known entity which is responsible for returning the IP address (or multiple ones) of the requested domain name in the response
