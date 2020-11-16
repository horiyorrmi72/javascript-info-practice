let i = 0;

do {
    console.log(i);
    i++;
} while (i < 5);

// this loop will first execute the body, and then check the condition while its truthy , execute it again and again..
// This form of syntax should only be used when you want the body of the loop to execute at least once regardless of the condition being truthy. 