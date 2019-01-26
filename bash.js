process.stdout.write('prompt > ')

process.stdin.on('data', (data) =>{
    const cmd = data.toString().trim();
    process.stdout.write('You typed: ' + cmd + '\n');
    if(cmd === 'pwd'){
        dirname = process.cwd();
        process.stdout.write(dirname);
    }


    process.stdout.write('\nprompt > ');
})


