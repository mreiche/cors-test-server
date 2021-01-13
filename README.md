# CORS Test server

Test server for CORS communication.

## Setup

You should create an hostname for the server in your `hosts`.
```shell
notepad.exe "C:\Windows\System32\drivers\etc\hosts"
```
```
127.0.0.1	cors-test-server.local
```

Run `genkey` and set the common name to the host name
```shell
Common Name (e.g. server FQDN or YOUR name) []: cors-test-server.local
```

## Start

```shell
node main.js
```

## Test
```shell
curl -k https://cors-test-server.local:3000
```

## Client integration

### Aurelia fetch client
```typescript
import {HttpClient} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';

@autoinject()
class CorsClient {
    constructor(httpClient: HttpClient) {
        httpClient.configure(config => {
            config
                .useStandardConfiguration()
                .rejectErrorResponses()
                .withDefaults({
                    credentials: "include",
                    mode: "cors"
                });
        });
    }
}
```
