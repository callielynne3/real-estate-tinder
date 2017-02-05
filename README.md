## Setup

### Install gems and packages
```
bundle && npm install
```

### Start Rails

#### Create development database, migrate, seed
```
rails db:create && rails db:migrate && rails db:seed
```

#### Run development server via `foreman`
```
foreman start -f Procfile.dev
```