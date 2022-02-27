# Network Protocols

## High Level View

![High Level View of Network Protocols Photo 1](https://github.com/TommyMynnSon/AlgoExpert-Personal-Notes/blob/main/systems-expert/images/4_network_protocols_photo_1.png)

![High Level View of Network Protocols Photo 2](https://github.com/TommyMynnSon/AlgoExpert-Personal-Notes/blob/main/systems-expert/images/4_network_protocols_photo_2.png)

## Prerequisites

Client
- A machine or process that requests data from a server
- Note that a single machine or piece of software can be both a client and a server at the same time. For instance, a single machine could act as a server for end users and as a client for a database

Server
- A machine or process that provides data or service for a client, usually by listening for incoming network calls
- Note that a single machine or piece of software can be both a client and a server at the same time. For instance, a single machine could act as a server for end users and as a client for a database

IP Address
- An address given to each machine connected to the public internet. IPv4 addresses consist of four numbers separated by dots: <b>a.b.c.d</b> where all four numbers are between 0 and 255
- There are IPv4 addresses reserved for special purposes
  - <b>127.0.0.1</b>: Your own local machine which is also referred to as <b>localhost</b>
  - <b>192.168.x.y</b>: Your private network. For instance, your machine and all machines on your private wifi network will usually have the <b>192.168</b> prefix

## Key Terms

IP
- Stands for <b>Internet Protocol</b>. This network protocol outlines how almost all machine-to-machine communications should happen in the world. Other protocols like <b>TCP</b>, <b>UDP</b>, and <b>HTTP</b> are built on top of IP

TCP
- Network protocol built on top of the Internet Protocol (IP). Allows for ordered, reliable data delivery between machines over the public internet by creating a <b>connection</b>
- TCP is usually implemented in the kernel, which exposes <b>sockets</b> to applications that they can use to stream data through an open connection

HTTP
- The <b>H</b>yper<b>T</b>ext <b>T</b>ransfer <b>P</b>rotocol is a very common network protocol implemented on top of TCP. Clients make HTTP requests, and servers respond with a response
- Requests typically have the following schema:
  ```
  host: string (example: algoexpert.io)
  port: integer (example: 80 or 443)
  method: string (example: GET, PUT, POST, DELETE, OPTIONS, or PATCH)
  headers: pair list (example: "Content-Type" => "application.json")
  body: opaque sequence of bytes
  ```
- Responses typically have the following schema:
  ```
  status code: integer (example, 200, 401)
  headers: pair list (example: "Content-Length" => 1238)
  body: opaque sequence of bytes
  ```

IP Packet
- Sometimes more broadly referred to as just a (network) <b>packet</b>, an IP packet is effectively the smallest unit used to describe data being sent over <b>IP</b>, aside from bytes. An IP consists of:
  - an <b>IP header</b>, which contains the source and destination <b>IP address</b> as well as other information related to the network
  - a <b>payload</b>, which is just the data being sent over the network
