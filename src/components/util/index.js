const sleep = async(timer =3000) => {
    await new Promise(resolve => setTimeout(resolve, timer) );
}
// await new Promise(resolve => {
//     setTimeout(resolve, 500);
//   });

export {
    sleep
};

