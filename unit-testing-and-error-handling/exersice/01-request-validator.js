function requestValidator(request) {

    const reqMethod = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const reqVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const uriCheck = /^[\w\.]+$/g;
    const messageCheck = /[<>\\&'"]+/g;

    if (!reqMethod.includes(request.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if ((!uriCheck.test(request.uri)) || request.uri === undefined || request.uri === '*') {
        throw new Error('Invalid request header: Invalid URI');
    }
    
    if (!reqVersion.includes(request.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if ((messageCheck.test(request.message)) || request.message === undefined) {
        throw new Error('Invalid request header: Invalid Message');

    }

    return request;
}

let request = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
};

let request1 = {
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}

let request2 = {
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}

let obj = {
    method: 'POST',
    version: 'HTTP/2.0',
    message: 'rm -rf /*'
};

let obj1 = {
    method: 'POST',
    uri: 'home.bash',
    version: 'HTTP/2.0'
};

console.log(requestValidator(request));
console.log(requestValidator(request1));
console.log(requestValidator(request2));
console.log(requestValidator(obj));
console.log(requestValidator(obj1));