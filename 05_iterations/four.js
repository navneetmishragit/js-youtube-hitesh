const myObject={
    js:"javascipt",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut for ${myObject}`);
}