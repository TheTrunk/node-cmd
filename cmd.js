var exec = require('child_process').exec;

var commandline={
    get:getString,
    run:runCommand
};

function runCommand(command){
    //return refrence to the child process
    return exec(
        command,
        {maxBuffer: Infinity}
    );
}

function getString(command,callback){
    //return refrence to the child process
    return exec(
        command,
        {maxBuffer: Infinity},
        (
            function(){
                return function(err,data,stderr){
                    if(!callback)
                        return;

                    callback(err, data, stderr);
                }
            }
        )(callback)
    );
}

module.exports=commandline;
