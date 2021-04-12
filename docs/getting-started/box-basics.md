---
id: box-basics
title: Getting started with box
sidebar_label: Getting started with box
---

`box` is a homegrown application that will help you install applications on your server and manage their services.

## Introduction
In order to use the installer and management functions on your slot, you'll need to use the included management script: `box`.

`box` has several functions, which we'll go over here:
- help
- list
- install/remove
- chpasswd
- service management
- bw

## help
The function of help is basic: provide you usage details on how to use box and the commands available to you.

Syntax:
```bash
box help
```

## list
This function lists the applications currently available for installation and a quick description of the application.

Syntax:
```bash
box list
```

## install / remove
The commands used to install and remove applications from the server. If you need help with specific commands, they are available on the application sub-pages here.

Syntax:
```bash
box install rtorrent
```

## chpasswd
Use this command when you'd like to change your password. `chpasswd` will change the password for SSH, FTP, HTTP and Deluge.

Syntax:
```bash
box chpasswd
```

## Service Management
You can manipulate service status with `start/stop/restart/enble/disable`. These commands will send the info straight to `systemctl`
<!--DOCUSAURUS_CODE_TABS-->
<!--Start-->
```plaintext
box start wireguard
```
<!--Stop-->
```plaintext
box stop wireguard
```
<!--Restart-->
```plaintext
box restart wireguard
```
<!--Enable-->
```plaintext
box enable wireguard
```
<!--Disable-->
```plaintext
box disable wireguard
```
<!--END_DOCUSAURUS_CODE_TABS-->

## bw
You can get a picture of your current bandwidth usage for the month with this command.

Syntax:
```bash
box
```