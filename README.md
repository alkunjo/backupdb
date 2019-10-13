# PSQL DB Backup

Simple `psql db` container based backup script using node-schedule

## Getting Started

### Dependencies

* Nodejs v10
* PostgreSQL running container with targeted database

### Installing

* `yarn install`

### Executing program

```
node index.js containername dbname destinationpath
```

## Authors

[Alan Kuncoro Raharjo](https://www.linkedin.com/in/alkunjo)

## Version History

* 0.0.2
    * `Readme.md`
* 0.0.1
    * Initial release
    * Write script to run every 12 AM GMT+7
