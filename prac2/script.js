let age = 23;

if (age >= 18) {
  console.log('You are an adult');
} else {
  console.log('You are a minor');
}

switch (age) {
    case 18:
        console.log('You are 18 years old');
        break;
    case 23:
        console.log('You are 23 years old');
        break;
    default:
        console.log('You are neither 18 nor 23 years old');
    }
