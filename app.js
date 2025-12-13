class PSPQuizApp {
    constructor() {
        this.questions = [
 // UNIT 1 - Introduction to Programming
  {
    id: 1,
    question: "Which of the following is a complete and functional setup that includes hardware, software, data, and users?",
    options: ["Monitor", "Operating System", "Input Device", "Computer System"],
    correct: 3
  },
  {
    id: 2,
    question: "Information provided by user to computer is called",
    options: ["Data", "Output", "Compute", "Result"],
    correct: 0
  },
  {
    id: 3,
    question: "A Computer program that converts assembly language to machine language is called",
    options: ["Compiler", "Linker", "Assembler", "Translator"],
    correct: 2
  },
  {
    id: 4,
    question: "The process of correcting errors in a program is called",
    options: ["Debugging", "Testing", "Coding", "Linking"],
    correct: 0
  },
  {
    id: 5,
    question: "Which of the following is an Input device?",
    options: ["Keyboard", "Speaker", "Printer", "CPU"],
    correct: 0
  },
  {
    id: 6,
    question: "Which step involves planning the program's structure?",
    options: ["Coding", "Testing and Debugging", "Design (Algorithm)", "Documentation"],
    correct: 2
  },
  {
    id: 7,
    question: "What is the purpose of 'Documenting the Program'?",
    options: ["Fixing errors in the program", "Designing flowcharts", "Creating user and technical guides", "Testing the final product"],
    correct: 2
  },
  {
    id: 8,
    question: "What is the final step of the program development cycle?",
    options: ["Design", "Maintenance", "Debugging", "Implementation"],
    correct: 1
  },
  {
    id: 9,
    question: "What is the main purpose of a programming language?",
    options: ["To play music", "To issue a sequence of commands to a computer", "To display images", "To write stories"],
    correct: 1
  },
  {
    id: 10,
    question: "Which of the following is considered a high-level programming language?",
    options: ["Assembly", "Machine Code", "Python", "Binary"],
    correct: 2
  },
  {
    id: 11,
    question: "A Computer program that converts assembly language to machine language is called",
    options: ["Compiler", "Linker", "Assembler", "Translator"],
    correct: 2
  },
  {
    id: 12,
    question: "Step by step procedure to solve a give problem is called",
    options: ["Flowchart", "Algorithm", "Machine program", "Compiler"],
    correct: 1
  },
  {
    id: 13,
    question: "The ways that specific words and symbols are used by each language is called",
    options: ["Program", "Algorithm", "Syntax", "Grammar"],
    correct: 2
  },
  {
    id: 14,
    question: "What is #include <stdio.h>?",
    options: ["Preprocessor directive", "Inclusion directive", "File inclusion directive", "None of the mentioned"],
    correct: 0
  },
  {
    id: 15,
    question: "Which escape character can be used to begin a new line in C?",
    options: ["\\a", "\\m", "\\n", "\\l"],
    correct: 2
  },
  {
    id: 16,
    question: "If a function in C does not return a value, what should be its return type?",
    options: ["Void", "float", "int", "null"],
    correct: 0
  },
  {
    id: 17,
    question: "The program written by the programmer in high level language is called",
    options: ["Object Program", "Source program", "Compiled program", "Assembled program"],
    correct: 1
  },
  {
    id: 18,
    question: "The format identifier '%x' is used for _______.",
    options: ["octal", "decimal", "binary", "Hexadecimal"],
    correct: 3
  },
  {
    id: 19,
    question: "Which of the following causes compilation error?",
    options: ["const int x = 10;", "int int = 5;", "int a = sizeof('A');", "float f = 1.0f + 2.0f;"],
    correct: 1
  },
  {
    id: 20,
    question: "Given the following line, how many tokens does it contain? int x = a + b * (c - d);",
    options: ["11", "10", "13", "8"],
    correct: 2
  },
  {
    id: 21,
    question: "What is a valid variable declaration?",
    options: ["1total", "total", "1_total", "int"],
    correct: 1
  },
  {
    id: 22,
    question: "What is the output of the following code? int a = 5; printf(\"%d\\n\", a++);",
    options: ["11", "5", "12", "Undefined behavior"],
    correct: 1
  },
  {
    id: 23,
    question: "Which of the following is not a keyword in C?",
    options: ["static", "unsigned", "typeof", "goto"],
    correct: 2
  },
  {
    id: 24,
    question: "What is the output? int a, b=2; a= b << 2 + 3; printf(\"value of a is=%x\\n\", a);",
    options: ["2", "3", "5", "40"],
    correct: 3
  },
  {
    id: 25,
    question: "The format identifier '%llu' is used for _______.",
    options: ["long", "long long unsigned", "decimal", "integer"],
    correct: 1
  },
  {
    id: 26,
    question: "Which function is used for formatted output in C?",
    options: ["printf()", "scanf()", "getchar()", "puts()"],
    correct: 0
  },
  {
    id: 27,
    question: "In C, scanf(\"%d\", &x); reads",
    options: ["A floating-point number", "An integer", "A string", "A character"],
    correct: 1
  },
  {
    id: 28,
    question: "Which function is used for unformatted input of a single character?",
    options: ["scanf()", "putchar()", "getchar()", "printf()"],
    correct: 2
  },
  {
    id: 29,
    question: "Which of the following reads a string until a newline is encountered?",
    options: ["puts()", "gets()", "getchar()", "printf()"],
    correct: 1
  },
  {
    id: 30,
    question: "What does puts() do in C?",
    options: ["Reads a string from the user", "Writes a string to the console with a newline", "Writes a string without a newline", "Reads a single character"],
    correct: 1
  },
  {
    id: 31,
    question: "Which function is used for formatted input in C?",
    options: ["printf()", "scanf()", "getchar()", "puts()"],
    correct: 1
  },
  {
    id: 32,
    question: "The format specifier %s in scanf() is used for:",
    options: ["Single character", "String", "Integer", "Floating-point number"],
    correct: 1
  },
  {
    id: 33,
    question: "What will printf(\"%5d\", 12); output?",
    options: ["12", "12 (3 spaces before 12)", "12 (3 spaces after 12)", "Error"],
    correct: 1
  },
  {
    id: 34,
    question: "Which of the following is TRUE about scanf()?",
    options: ["It can take input without specifying format specifiers", "It stops reading a string at whitespace", "It automatically trims extra spaces", "It ignores newline characters"],
    correct: 1
  },
  {
    id: 35,
    question: "In command-line arguments, argv[0] contains:",
    options: ["First user argument", "Program name", "Total number of arguments", "Last user argument"],
    correct: 1
  },
  {
    id: 36,
    question: "Which of the following operators is used to perform a bitwise right shift?",
    options: ["<<", ">>", "&", "|"],
    correct: 1
  },
  {
    id: 37,
    question: "If x = 5, what will be the value of x << 2?",
    options: ["10", "20", "15", "25"],
    correct: 1
  },
  {
    id: 38,
    question: "What will be the data type of the following expression? (Initial data type: a = int, var1 = double, var2 = float) expression (a < 50)? var1 : var2;",
    options: ["int", "float", "double", "cannot be determined"],
    correct: 2
  },
  {
    id: 39,
    question: "Which of the following arithmetic operator takes only integer operands?",
    options: ["+", "-", "/", "%"],
    correct: 3
  },
  {
    id: 40,
    question: "Which of the following operators has the lowest priority?",
    options: ["&&", "+", "*", "!=="],
    correct: 0
  },
  {
    id: 41,
    question: "What will be the result of the following expression if a = 6, b = 3, and c = 4? (a * b - c) / (b + c % a) + (a % b * c)",
    options: ["7", "8", "6", "10"],
    correct: 2
  },
  {
    id: 42,
    question: "What will be the result of the following expression if x = 10 and y = 4? (x / y) == 2 && (x % y) > 0",
    options: ["True", "False", "10", "20"],
    correct: 0
  },
  {
    id: 43,
    question: "Which of the following operators is right-associative?",
    options: ["+ addition", "* multiplication", "- subtraction", "?: Ternary conditional"],
    correct: 3
  },
  {
    id: 44,
    question: "Which of the following has the lowest precedence in C?",
    options: ["Logical AND (&&)", "Assignment (=)", "Conditional (?:)", "Comma (,)"],
    correct: 3
  },
  {
    id: 45,
    question: "Given: int a = 5; float b = 2.0; printf(\"%f\", a / (int)b); What is printed?",
    options: ["2.5", "2.0", "2.000000", "Compiler Error"],
    correct: 2
  },
  {
    id: 46,
    question: "What is the associativity of the conditional (?:) operator in C?",
    options: ["Left to right", "Right to left", "No associativity", "Same as logical operators"],
    correct: 1
  },
  {
    id: 47,
    question: "Which is true about implicit type conversion in C?",
    options: ["A float is promoted to double in arithmetic expressions", "char is not converted to int automatically", "Conversion always happens from higher to lower precision", "No conversion happens between signed and unsigned types"],
    correct: 0
  },
  {
    id: 48,
    question: "Evaluate: int x = 7; int y = 2; printf(\"%d\", x % y * x / y);",
    options: ["1", "0", "2", "3"],
    correct: 3
  },
  {
    id: 49,
    question: "In C, the expression a = b = c = 5; assigns:",
    options: ["5 to a only", "5 to a and b, but not c", "5 to all a, b, and c", "5 to c only"],
    correct: 2
  },
  {
    id: 50,
    question: "Given int a = 5; float b = 2; what is the result of a / b?",
    options: ["2", "2.5", "2.0", "0"],
    correct: 1
  },

  // UNIT 2 - Control Structures
  {
    id: 51,
    question: "Which of the following decision-making statements is not available in C?",
    options: ["if", "if-else", "switch", "match-case"],
    correct: 3
  },
  {
    id: 52,
    question: "int x = 5; if (x> 10) printf(\"Hello\"); else printf(\"Hi\");",
    options: ["Hello", "Hi", "HelloHi", "No output"],
    correct: 1
  },
  {
    id: 53,
    question: "What is the purpose of an if statement in C?",
    options: ["To iterate over a block of code", "To declare a variable", "To execute a block of code conditionally", "To define a function"],
    correct: 2
  },
  {
    id: 54,
    question: "Which of the following is true about the switch statement in C?",
    options: ["It can work with float values", "It requires integer or character constants in case labels", "It supports logical conditions in case", "It automatically ends after one case executes"],
    correct: 1
  },
  {
    id: 55,
    question: "What will happen if break is omitted in a switch case?",
    options: ["Program stops immediately", "The next case statements will also execute", "Compiler error", "Switch will restart from first case"],
    correct: 1
  },
  {
    id: 56,
    question: "If you have to make decision based on multiple choices, which of the following is best suited?",
    options: ["if", "if-else", "if-else-if", "for"],
    correct: 2
  },
  {
    id: 57,
    question: "Which of the following statements is true regarding nested if statements?",
    options: ["Nested if statements can have multiple else blocks.", "Nested if statements are not allowed in C.", "The else block must match the nearest preceding if statement.", "Nested if statements must always have a default block."],
    correct: 2
  },
  {
    id: 58,
    question: "____________ is the built in multiway decision statement in C.",
    options: ["for", "switch", "if", "while"],
    correct: 1
  },
  {
    id: 59,
    question: "Which of these is not valid in C?",
    options: ["if (x)", "if (x = 5)", "if (x == 5)", "if x == 5"],
    correct: 3
  },
  {
    id: 60,
    question: "What will the following code print? int x = 0; if (x++) printf(\"True\"); else printf(\"False\");",
    options: ["True", "False", "Compiler error", "No output"],
    correct: 1
  },
  {
    id: 61,
    question: "What is the output of the C Program? int main() { if( 10 < 9 ) printf(\"Hurray..\\n\"); else if(4 > 2) printf(\"England\"); return 0; }",
    options: ["England", "Hurray", "Compiler error for missing else c", "No otput"],
    correct: 0
  },
  {
    id: 62,
    question: "The else part of an if-else statement is executed when:",
    options: ["The if condition is true", "The if condition is false", "The loop ends", "There is a syntax error"],
    correct: 1
  },
  {
    id: 63,
    question: "In C, the default case in a switch statement:",
    options: ["Must be the last case", "Must be the first case", "Can be anywhere but executes if no match", "Is optional but must be first if used"],
    correct: 2
  },
  {
    id: 64,
    question: "What is the otput? int x = 1; switch(x) { case 0: printf(\"Zero\"); break; case 1: printf(\"One\"); default: printf(\"Default\"); }",
    options: ["One", "Default", "OneDefault", "Zero"],
    correct: 2
  },
  {
    id: 65,
    question: "What is the output? int x = 10; if (x == 10); printf(\"Hello\");",
    options: ["Hello", "Nothing printed", "Compilation error", "warning"],
    correct: 0
  },
  {
    id: 66,
    question: "Which of the following statements is true about the goto statement in C?",
    options: ["It can be used to jump to a specific line in a function.", "It can be used to jump to a label within a different function.", "It can be used to jump to a specific location in the code by using a label.", "It can be used to exit from a loop or switch statement."],
    correct: 2
  },
  {
    id: 67,
    question: "What is the output of the code? int i = 0; while (i < 5) { if (i == 2) { break; } printf(\"%d \", i); i++; }",
    options: ["0 1 2", "0 1", "0 1 2 3 4", "0 1 2 3"],
    correct: 1
  },
  {
    id: 68,
    question: "In which scenario would you use the continue statement?",
    options: ["To exit from a loop early and execute the code after the loop.", "To skip the remaining statements in the current iteration of a loop and proceed to the next iteration.", "To jump to a specific line of code unconditionally.", "To break out of a loop or switch statement."],
    correct: 1
  },
  {
    id: 69,
    question: "What is the output? int x = 0; while (x < 5) { if (x == 3) { x++; continue; } printf(\"%d \", x); x++; }",
    options: ["0 1 2 3 4", "0 1 2 3", "0 1 2 4", "0 1 2 3 4 5"],
    correct: 2
  },
  {
    id: 70,
    question: "What is the output of the code? int i; for (i = 0; i < 10; i++) { if (i == 5) { break; } printf(\"%d \", i); } printf(\"Loop ended.\\n\");",
    options: ["0 1 2 3 4 5 Loop ended", "Loop ended", "0 1 2 3 4 5 6 7 8 9 Loop ended", "0 1 2 3 4 Loop ended"],
    correct: 3
  },
  {
    id: 71,
    question: "What is the output? int i; for (i = 0; i < 5; i++) { if (i == 3) { break; } printf(\"%d \", i); }",
    options: ["0 1 2 3", "1 2 3", "0 1 2", "0 1 2 3 4"],
    correct: 2
  },
  {
    id: 72,
    question: "Which of the following loops is guaranteed to execute at least once?",
    options: ["for loop", "while loop", "do- while loop", "repeat loop"],
    correct: 2
  },
  {
    id: 73,
    question: "What is the output of the code? int i; for (i = 0; i < 3; i++) { printf(\"%d \", i); if (i == 1) { continue; } printf(\"Hello \"); }",
    options: ["0 Hello 1 2 Hello", "0 Hello 1 2", "0 Hello 1 Hello 2 Hello", "0 Hello 1 Hello 2"],
    correct: 0
  },
  {
    id: 74,
    question: "How many times will the following do-while loop execute? int i = 5; do { i++; } while (i < 5); printf(\"%d\\n\", i);",
    options: ["0", "1", "5", "infinite times"],
    correct: 1
  },
  {
    id: 75,
    question: "What is the output? int i; for (i = 3; i > 0; i--) { printf(\"%d \", i); if (i == 2) { break; } }",
    options: ["3 2", "3 2 1", "3 2 1 0", "3"],
    correct: 0
  },
  {
    id: 76,
    question: "Which of the following statements is true?",
    options: ["for loop is faster than while loop", "while loop is faster than for loop", "do-while loop is faster than both for and while loops", "There is no difference in execution speed between for, while and do-while loops"],
    correct: 3
  },
  {
    id: 77,
    question: "Consider the following code snippet. What will be the value of 'x' after the loop finishes? int x = 0; for (int i = 0; i < 5; i++) { x += i; }",
    options: ["5", "10", "15", "20"],
    correct: 1
  },
  {
    id: 78,
    question: "Which of the following is exit controlled loop?",
    options: ["for loop", "while loop", "do-while loop", "repeat loop"],
    correct: 2
  },
  {
    id: 79,
    question: "Which loop is most suitable when the number of iterations is known in advance?",
    options: ["for loop", "while loop", "do-while loop", "all of the above"],
    correct: 0
  },
  {
    id: 80,
    question: "Which of the following is the correct syntax for an infinite loop using for?",
    options: ["for ()", "for( ; )", "for(;;)", "for( );"],
    correct: 2
  },

  // UNIT 3 - Arrays and Strings
  {
    id: 81,
    question: "What is the index of the first element in an array?",
    options: ["0", "1", "First", "Start"],
    correct: 0
  },
  {
    id: 82,
    question: "In an array declaration int arr[5] = {1, 2, 3};, what will be the value of arr[3]?",
    options: ["1", "2", "3", "0"],
    correct: 3
  },
  {
    id: 83,
    question: "Which statement about arrays in C is false?",
    options: ["Arrays can store multiple values of different data types.", "The size of an array must be specified at the time of declaration.", "The elements of an array are stored in contiguous memory locations.", "The array index starts from 0."],
    correct: 0
  },
  {
    id: 84,
    question: "How do you access the last element of an array arr with n elements in C",
    options: ["arr[n];", "arr[n-1];", "arr[n+1];", "arr[last];"],
    correct: 1
  },
  {
    id: 85,
    question: "Assuming int is of 4bytes, what is the size of int arr[15];?",
    options: ["15", "19", "11", "60"],
    correct: 3
  },
  {
    id: 86,
    question: "To access the third element of an array named 'arr', you would use:",
    options: ["arr[2]", "arr[3]", "arr(2)", "arr(3)"],
    correct: 0
  },
  {
    id: 87,
    question: "Which of the following correctly initializes an array of size 5 with all values set to 0?",
    options: ["int arr[5] = {0};", "int arr[5];", "int arr[5] = {};", "int arr[] = {0,0,0,0,0};"],
    correct: 0
  },
  {
    id: 88,
    question: "How would you declare a two-dimensional integer array of 3 rows and 4 columns?",
    options: ["int arr[3, 4];", "int arr[3][4];", "int[3][4] arr;", "int arr[ ][ ] = {3, 4};"],
    correct: 1
  },
  {
    id: 89,
    question: "What will be the output of the following C code? int ary[2][3]; ary[][] = {{1, 2, 3}, {4, 5, 6}}; printf(\"%d\\n\", ary[1][0]);",
    options: ["Compile time error", "4", "1", "2"],
    correct: 0
  },
  {
    id: 90,
    question: "Given a 2D array int a[2][3] = {{1, 2, 3}, {4, 5, 6}};, what does a[1][2] return?",
    options: ["3", "4", "5", "6"],
    correct: 3
  },
  {
    id: 91,
    question: "Which operation on a two-dimensional array requires nested loops in C?",
    options: ["Printing all elements", "Initializing all elements to zero", "Summing all elements", "All of the above"],
    correct: 3
  },
  {
    id: 92,
    question: "What is the correct declaration of a function that accepts a two-dimensional array with 3 columns in C?",
    options: ["void func(int arr[][])", "void func(int arr[3][])", "void func(int arr[][3])", "void func(int arr[3][3])"],
    correct: 2
  },
  {
    id: 93,
    question: "How many passes will bubble sort make to sort the array {5, 1, 4, 2, 8}?",
    options: ["3", "4", "5", "2"],
    correct: 1
  },
  {
    id: 94,
    question: "In linear search, how are elements checked?",
    options: ["By checking from the middle", "By checking from first to last one by one", "By checking from last to first only", "Randomly checking elements"],
    correct: 1
  },
  {
    id: 95,
    question: "Binary search finds the number by:",
    options: ["Checking all elements one by one", "Dividing the list into halves each time", "Starting from the last element", "Jumping to random elements"],
    correct: 1
  },
  {
    id: 96,
    question: "Bubble sort works by:",
    options: ["Swapping the biggest element to the end in each pass", "Picking the smallest and putting it first", "Randomly swapping elements", "Sorting only half of the list"],
    correct: 0
  },
  {
    id: 97,
    question: "After the first pass in bubble sort, the largest element is:",
    options: ["At the start of the array", "In the middle", "At the end of the array", "Deleted from the array"],
    correct: 2
  },
  {
    id: 98,
    question: "In selection sort, what is selected in each pass?",
    options: ["The largest element", "The smallest element", "Any random element", "Middle element"],
    correct: 1
  },
  {
    id: 99,
    question: "int arr[] = {4, 7, 9}; int key = 7; for(int i=0; i<3; i++) { if(arr[i] == key) { printf(\"%d\", i); break; } }",
    options: ["0", "1", "2", "Nothing"],
    correct: 1
  },
  {
    id: 100,
    question: "If the number we are looking for is at the first position in the array, linear search will take:",
    options: ["Many steps", "Only one step", "No steps", "Exactly half the steps"],
    correct: 1
  },
  {
    id: 101,
    question: "A string constant in C is terminated by",
    options: ["'\\0'", "\"\\0\"", "' '", "\" \""],
    correct: 0
  },
  {
    id: 102,
    question: "What will strcmp() function do?",
    options: ["compares the first n characters of the object", "undefined function", "copies the string", "compares the string"],
    correct: 3
  },
  {
    id: 103,
    question: "Which of the following function is appropriate for reading a multi-word string?",
    options: ["printf()", "scanf()", "gets()", "puts()"],
    correct: 2
  },
  {
    id: 104,
    question: "The ----------------- function appends not more than n characters.",
    options: ["strcat()", "strncat()", "memcat()", "strcpy()"],
    correct: 1
  },
  {
    id: 105,
    question: "When strcpy(str1,str2) is executed,",
    options: ["str1 is stored in str2", "str2 is stored in str1", "copied string is stored in virtual memory", "None of the above"],
    correct: 1
  },
  {
    id: 106,
    question: "A C string elements are always stored in?",
    options: ["Sequential memory locations", "Random memory locations", "Does not have memory location", "Alternate memory locations"],
    correct: 0
  },
  {
    id: 107,
    question: "If the two strings are identical, then strcmp() function returns",
    options: ["-1", "1", "0", "NULL"],
    correct: 2
  },
  {
    id: 108,
    question: "How do you find the length of a string in C?",
    options: ["Using the length() function", "Using the strlen() function", "Using the sizeof operator", "By manually counting the characters"],
    correct: 1
  },
  {
    id: 109,
    question: "What happens if a string array is initialized with fewer characters than its size in C?",
    options: ["The program crashes", "It causes an error", "The remaining elements are left uninitialized", "The remaining elements are filled with null characters"],
    correct: 3
  },
  {
    id: 110,
    question: "Which header file must be included to use string functions like strcpy() and strcat() in C?",
    options: ["#include <string.h>", "#include <stdio.h>", "#include <stdlib.h>", "#include <strings.h>"],
    correct: 0
  },

  // UNIT 4 - Pointers and Functions
  {
    id: 111,
    question: "Which operator is used to access the address of a variable in C?",
    options: ["*", "&", "@", "%"],
    correct: 1
  },
  {
    id: 112,
    question: "What will be the output of the following code? int var = 7; int *p; p = &var; printf(\"%d\", *p);",
    options: ["7", "The memory address of var", "0", "Undefined"],
    correct: 0
  },
  {
    id: 113,
    question: "What does the following code snippet do? int arr[5] = {1, 2, 3, 4, 5}; int *ptr = arr; printf(\"%d\", *(ptr + 2));",
    options: ["Prints 2", "Prints 3", "Prints the address of the third element", "Prints 4"],
    correct: 1
  },
  {
    id: 114,
    question: "What is the correct way to access the value of a variable through a pointer?",
    options: ["&ptr", "*ptr", "ptr*", "@ptr"],
    correct: 1
  },
  {
    id: 115,
    question: "What is a pointer in C?",
    options: ["A variable that stores a character.", "A variable that stores a floating-point number.", "A variable that stores the memory address of another variable.", "A variable that stores a Boolean value."],
    correct: 2
  },
  {
    id: 116,
    question: "Which format specifier is used to print the address stored in a pointer?",
    options: ["%d", "%p", "%f", "%u"],
    correct: 1
  },
  {
    id: 117,
    question: "Which of the following correctly declares a pointer to an integer in C?",
    options: ["int p;", "int *p;", "int &p;", "pointer int p;"],
    correct: 1
  },
  {
    id: 118,
    question: "Which operator is used to get the value stored at a pointer's address?",
    options: ["*", "&", "@", "%"],
    correct: 0
  },
  {
    id: 119,
    question: "What will the following print? int x = 5; int *p = &x; printf(\"%p\", p);",
    options: ["Value of x", "Address of x", "Address of pointer p", "Garbage value"],
    correct: 1
  },
  {
    id: 120,
    question: "What does this print? int a = 5, b = 10; int *p = &a, *q = &b; *q = *p; printf(\"%d %d\", a, b);",
    options: ["5 5", "5 10", "10 5", "Compilation Error"],
    correct: 0
  },
  {
    id: 121,
    question: "Which of the following is a null pointer in C?",
    options: ["int *p = NULL;", "int *p = 0;", "Both a and b", "only A"],
    correct: 2
  },
  {
    id: 122,
    question: "Which of the following pointer declarations is invalid?",
    options: ["int *ptr1;", "float *ptr2;", "char *ptr3;", "int ptr4*;"],
    correct: 3
  },
  {
    id: 123,
    question: "What happens if you dereference a NULL pointer in C?",
    options: ["Prints 0", "Segmentation fault/runtime error", "Prints NULL", "Undefined compile-time behavior"],
    correct: 1
  },
  {
    id: 124,
    question: "Which of the following is NOT a valid pointer type in C?",
    options: ["int*", "void*", "char**", "string*"],
    correct: 3
  },
  {
    id: 125,
    question: "Which of the following is not a valid storage class in C?",
    options: ["auto", "static", "volatile", "public"],
    correct: 3
  },
  {
    id: 126,
    question: "What is the main advantage of recursion?",
    options: ["Uses less memory", "Makes code shorter and easier to understand for some problems", "Executes faster than loops", "Avoids stack usage"],
    correct: 1
  },
  {
    id: 127,
    question: "Which keyword is used to define a function in C?",
    options: ["def", "func", "function", "No special keyword is required"],
    correct: 3
  },
  {
    id: 128,
    question: "Which of the following is a correct function prototype in C?",
    options: ["function sum(int, int);", "sum int(int, int);", "int sum(int, int);", "int sum;"],
    correct: 2
  },
  {
    id: 129,
    question: "Which of these is not a valid way to call a function in C?",
    options: ["func();", "func(x);", "x = func();", "call func;"],
    correct: 3
  },
  {
    id: 130,
    question: "Which function is always the first to execute in a C program?",
    options: ["start()", "main()", "init()", "first()"],
    correct: 1
  },
  {
    id: 131,
    question: "What is the correct syntax for declaring a user-defined function in C that returns an int and takes two float parameters?",
    options: ["int func(float, float);", "func int(float, float);", "int func(float x, y);", "float func(int, int);"],
    correct: 0
  },
  {
    id: 132,
    question: "What will be the output of the following C program?",
    options: ["Hello", "HelloHello", "Hello Hello", "Compilation Error"],
    correct: 1
  },
  {
    id: 133,
    question: "Which storage class in C makes a variable retain its value between function calls?",
    options: ["auto", "register", "static", "extern"],
    correct: 2
  },
  {
    id: 134,
    question: "What will be the output of this program?",
    options: ["1 1 1", "1 2 3", "0 1 2", "Error"],
    correct: 1
  },
  {
    id: 135,
    question: "Which of the following is true about register variables?",
    options: ["They are stored in CPU registers for faster access.", "They can be directly accessed using & operator.", "They are slower than auto variables.", "They are always global."],
    correct: 0
  },
  {
    id: 136,
    question: "What will the following program output?",
    options: ["24", "10", "4", "5"],
    correct: 0
  },
  {
    id: 137,
    question: "Recursive functions must have:",
    options: ["At least two parameters", "A base condition to stop recursion", "A loop for termination", "No return value"],
    correct: 1
  },
  {
    id: 138,
    question: "What will be the output of the following code?",
    options: ["3 2 1", "1 2 3", "0 1 2 3", "No Output"],
    correct: 0
  },
  {
    id: 139,
    question: "What will happen if a recursive function does not have a base case?",
    options: ["It will return 0", "It will stop automatically after 10 calls.", "It will result in infinite recursion and possible stack overflow.", "It will compile but not run."],
    correct: 2
  },
  {
    id: 140,
    question: "What will the following code print?",
    options: ["15", "5", "10", "6"],
    correct: 0
  },

  // UNIT 5 - Structures and Files
  {
    id: 141,
    question: "In C, structure members are accessed using:",
    options: ["Dot operator (.) for variables and arrow operator (->) for pointers", "Only arrow operator (->)", "Only dot operator (.)", "None of the above"],
    correct: 0
  },
  {
    id: 142,
    question: "What will happen if you assign one structure variable to another of the same type?",
    options: ["All members are copied", "Only integer members are copied", "Causes a runtime error", "Not allowed in C"],
    correct: 0
  },
  {
    id: 143,
    question: "Given the structure and array declaration below, how do you access the age of the third student in the array? struct Student { char name[50]; int age; }; struct Student students[5];",
    options: ["students[3].age", "students[2].age", "students.age[2]", "students[2]->age"],
    correct: 1
  },
  {
    id: 144,
    question: "Which statement correctly defines a structure named \"Person\" with members \"name\" and \"age\" of type char and int respectively?",
    options: ["struct Person { char name; int age; }", "struct Person { name, age; }", "struct { name; age; } Person;", "struct { char* name, int age; } Person;"],
    correct: 0
  },
  {
    id: 145,
    question: "Which of the following is a collection of different data types?",
    options: ["String", "Array", "Structure", "Files"],
    correct: 2
  },
  {
    id: 146,
    question: "How do you declare an array of structures in C for a structure named myStruct?",
    options: ["array myStruct arr[];", "myStruct arr;", "struct array myStruct[];", "myStruct array[];"],
    correct: 1
  },
  {
    id: 147,
    question: "When a structure is passed by value to a function:",
    options: ["A copy of the structure is made.", "The original structure is modified directly.", "Only the first member is passed.", "This is not allowed in C."],
    correct: 0
  },
  {
    id: 148,
    question: "Which of the following is true about structures in C?",
    options: ["All members share the same memory location.", "Each member has its own memory location.", "The size of a structure is always the sum of sizes of its members without padding.", "Structure members must all be of the same data type."],
    correct: 1
  },
  {
    id: 149,
    question: "When a structure contains another structure inside it, it is called:",
    options: ["Self-referencing structure", "Nested structure", "Recursive structure", "Anonymous structure"],
    correct: 1
  },
  {
    id: 150,
    question: "Which of the following is true about passing structures to functions in C?",
    options: ["You can only pass structures by value.", "You can only pass structures by pointer.", "You can pass structures both by value and by pointer.", "Structures cannot be passed to functions."],
    correct: 2
  },
  {
    id: 151,
    question: "Which function is used to open a file in C?",
    options: ["fread()", "fopen()", "fclose()", "fwrite()"],
    correct: 1
  },
  {
    id: 152,
    question: "What mode opens a file for reading only?",
    options: ["w", "r", "a", "rw"],
    correct: 1
  },
  {
    id: 153,
    question: "What happens if you open a file in write (w) mode?",
    options: ["File is opened and contents are appended", "File is created if not present, existing contents are erased", "File is opened for reading only", "File is locked for editing"],
    correct: 1
  },
  {
    id: 154,
    question: "Which function is used to close a file in C?",
    options: ["fopen()", "fclose()", "fread()", "closefile()"],
    correct: 1
  },
  {
    id: 155,
    question: "What does EOF stand for?",
    options: ["End of file", "Error on file", "End of function", "Entry of file"],
    correct: 0
  },
  {
    id: 156,
    question: "Which function reads a line of text from a file in C?",
    options: ["fgets()", "fputc()", "fwrite()", "fread()"],
    correct: 0
  },
  {
    id: 157,
    question: "If you want to add data to the end of an existing file without deleting it, which mode should you use?",
    options: ["w", "a", "r", "r+"],
    correct: 1
  },
  {
    id: 158,
    question: "What happens if you try to read a file opened in write mode?",
    options: ["Data is read normally", "File pointer moves to EOF immediately", "Error or undefined behavior", "File is closed automatically"],
    correct: 2
  },
  {
    id: 159,
    question: "Which function reads a single character from a file in C?",
    options: ["fputc()", "fgetc()", "fwrite()", "fgets()"],
    correct: 1
  },
  {
    id: 160,
    question: "Why is it important to close a file after operations?",
    options: ["To speed up the program execution", "To free system resources and flush buffers", "To open the file again later", "To rename the file automatically"],
    correct: 1
  }
];


        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.timeRemaining = 15 * 60; 
        this.timer = null;
        this.startTime = null;
        this.studentName = '';

        this.initializeEventListeners();
    }

    initializeEventListeners() {
        const startBtn = document.getElementById('startQuizBtn');
        const adminBtn = document.getElementById('adminLoginBtn');
        
        if (startBtn) {
            startBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.startQuiz();
            });
        }

        if (adminBtn) {
            adminBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showAdminModal();
            });
        }

        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');

        if (prevBtn) prevBtn.addEventListener('click', () => this.previousQuestion());
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextQuestion());
        if (submitBtn) submitBtn.addEventListener('click', () => this.submitQuiz());

        const reviewBtn = document.getElementById('reviewAnswersBtn');
        const newQuizBtn = document.getElementById('newQuizBtn');

        if (reviewBtn) reviewBtn.addEventListener('click', () => this.showReview());
        if (newQuizBtn) newQuizBtn.addEventListener('click', () => this.newQuiz());

        const backBtn = document.getElementById('backToResultsBtn');
        if (backBtn) backBtn.addEventListener('click', () => this.showResults());

        const adminLoginSubmit = document.getElementById('adminLoginSubmit');
        const adminModalClose = document.getElementById('adminModalClose');
        const logoutBtn = document.getElementById('logoutBtn');
        const exportBtn = document.getElementById('exportBtn');

        if (adminLoginSubmit) adminLoginSubmit.addEventListener('click', () => this.adminLogin());
        if (adminModalClose) adminModalClose.addEventListener('click', () => this.hideAdminModal());
        if (logoutBtn) logoutBtn.addEventListener('click', () => this.adminLogout());
        if (exportBtn) exportBtn.addEventListener('click', () => this.exportCSV());

        const nameInput = document.getElementById('studentName');
        if (nameInput) {
            nameInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.startQuiz();
                }
            });
            
            nameInput.addEventListener('click', () => {
                nameInput.focus();
            });
        }
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    shuffleQuestionOptions(question) {
        const shuffled = { ...question };
        const optionsWithIndex = question.options.map((option, index) => ({ option, originalIndex: index }));
        const shuffledOptions = this.shuffleArray(optionsWithIndex);
        
        shuffled.options = shuffledOptions.map(item => item.option);
        shuffled.correct = shuffledOptions.findIndex(item => item.originalIndex === question.correct);
        
        return shuffled;
    }

    prepareRandomQuestions() {
        const shuffledQuestions = this.shuffleArray(this.questions);
        const selectedQuestions = shuffledQuestions.slice(0, 20);
        
        this.currentQuestions = selectedQuestions.map(q => this.shuffleQuestionOptions(q));
        
        this.currentQuestions = this.shuffleArray(this.currentQuestions);
    }

    startQuiz() {
        const nameInput = document.getElementById('studentName');
        
        if (!nameInput || !nameInput.value.trim()) {
            alert('Please enter your name before starting the quiz.');
            if (nameInput) nameInput.focus();
            return;
        }

        this.studentName = nameInput.value.trim();
        this.prepareRandomQuestions();
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.timeRemaining = 15 * 60;
        this.startTime = Date.now();

        this.showScreen('quizScreen');
        this.displayQuestion();
        this.startTimer();
    }

    startTimer() {
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        this.timer = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();

            if (this.timeRemaining <= 5 * 60) { // 5 minutes warning
                const timerElement = document.getElementById('timer');
                if (timerElement) {
                    timerElement.classList.add('warning');
                }
            }

            if (this.timeRemaining <= 0) {
                this.submitQuiz();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const timerElement = document.getElementById('timer');
        if (timerElement) {
            const minutes = Math.floor(this.timeRemaining / 60);
            const seconds = this.timeRemaining % 60;
            timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }
    }

    displayQuestion() {
        const question = this.currentQuestions[this.currentQuestionIndex];
        const questionNumber = this.currentQuestionIndex + 1;

        // Update question counter
        const counterElement = document.getElementById('questionCounter');
        if (counterElement) {
            counterElement.textContent = `Question ${questionNumber} of 20`;
        }

        // Update question text
        const questionTextElement = document.getElementById('questionText');
        if (questionTextElement) {
            questionTextElement.textContent = question.question;
        }

        // Update options
        const optionsContainer = document.getElementById('optionsContainer');
        if (optionsContainer) {
            optionsContainer.innerHTML = '';

            question.options.forEach((option, index) => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'option';
                
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = 'answer';
                radio.value = index;
                radio.id = `option${index}`;

                const label = document.createElement('label');
                label.htmlFor = `option${index}`;
                label.textContent = option;

                optionDiv.appendChild(radio);
                optionDiv.appendChild(label);

                if (this.answers[question.id] === index) {
                    radio.checked = true;
                    optionDiv.classList.add('selected');
                }

                optionDiv.addEventListener('click', () => {
                    optionsContainer.querySelectorAll('.option').forEach(opt => {
                        opt.classList.remove('selected');
                    });
                    
                    optionDiv.classList.add('selected');
                    radio.checked = true;
                    
                    this.answers[question.id] = index;
                });

                optionsContainer.appendChild(optionDiv);
            });
        }

        const progressBar = document.getElementById('progressBar');
        if (progressBar) {
            const progress = (questionNumber / 20) * 100;
            progressBar.style.width = `${progress}%`;
        }

        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');

        if (prevBtn) prevBtn.disabled = questionNumber === 1;
        
        if (nextBtn) {
            nextBtn.style.display = questionNumber === 20 ? 'none' : 'block';
        }
        
        if (submitBtn) {
            submitBtn.style.display = questionNumber === 20 ? 'block' : 'none';
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayQuestion();
        }
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.currentQuestions.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
        }
    }

    submitQuiz() {
        if (this.timer) {
            clearInterval(this.timer);
        }

        const endTime = Date.now();
        const timeTaken = Math.floor((endTime - this.startTime) / 1000);

        let correct = 0;
        let wrong = 0;
        let unanswered = 0;

        this.currentQuestions.forEach(question => {
            if (this.answers.hasOwnProperty(question.id)) {
                if (this.answers[question.id] === question.correct) {
                    correct++;
                } else {
                    wrong++;
                }
            } else {
                unanswered++;
            }
        });

        const scorePercentage = Math.round((correct / 20) * 100);

        this.saveResult({
            name: this.studentName,
            score: scorePercentage,
            correct: correct,
            wrong: wrong,
            unanswered: unanswered,
            timeTaken: timeTaken,
            date: new Date().toLocaleDateString(),
            answers: { ...this.answers },
            questions: [...this.currentQuestions]
        });

        this.displayResults(scorePercentage, correct, wrong, unanswered, timeTaken);
    }

    displayResults(scorePercentage, correct, wrong, unanswered, timeTaken) {
        const elements = {
            studentNameDisplay: document.getElementById('studentNameDisplay'),
            scorePercentage: document.getElementById('scorePercentage'),
            correctCount: document.getElementById('correctCount'),
            wrongCount: document.getElementById('wrongCount'),
            unansweredCount: document.getElementById('unansweredCount'),
            timeTaken: document.getElementById('timeTaken')
        };

        if (elements.studentNameDisplay) elements.studentNameDisplay.textContent = this.studentName;
        if (elements.scorePercentage) elements.scorePercentage.textContent = `${scorePercentage}%`;
        if (elements.correctCount) elements.correctCount.textContent = correct;
        if (elements.wrongCount) elements.wrongCount.textContent = wrong;
        if (elements.unansweredCount) elements.unansweredCount.textContent = unanswered;

        if (elements.timeTaken) {
            const minutes = Math.floor(timeTaken / 60);
            const seconds = timeTaken % 60;
            elements.timeTaken.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }

        this.showScreen('resultsScreen');
    }

    showReview() {
        const reviewContainer = document.getElementById('reviewQuestions');
        if (!reviewContainer) return;
        
        reviewContainer.innerHTML = '';

        let correct = 0, wrong = 0, unanswered = 0;
        
        this.currentQuestions.forEach((question) => {
            if (this.answers.hasOwnProperty(question.id)) {
                if (this.answers[question.id] === question.correct) {
                    correct++;
                } else {
                    wrong++;
                }
            } else {
                unanswered++;
            }
        });

        const summaryElements = {
            reviewCorrectCount: document.getElementById('reviewCorrectCount'),
            reviewWrongCount: document.getElementById('reviewWrongCount'),
            reviewUnansweredCount: document.getElementById('reviewUnansweredCount')
        };

        if (summaryElements.reviewCorrectCount) summaryElements.reviewCorrectCount.textContent = correct;
        if (summaryElements.reviewWrongCount) summaryElements.reviewWrongCount.textContent = wrong;
        if (summaryElements.reviewUnansweredCount) summaryElements.reviewUnansweredCount.textContent = unanswered;

        this.currentQuestions.forEach((question, index) => {
            const reviewDiv = document.createElement('div');
            reviewDiv.className = 'review-question';

            const userAnswer = this.answers[question.id];
            const isCorrect = userAnswer === question.correct;
            const isAnswered = userAnswer !== undefined;

            if (isAnswered) {
                reviewDiv.classList.add(isCorrect ? 'correct' : 'wrong');
            } else {
                reviewDiv.classList.add('unanswered');
            }

            reviewDiv.innerHTML = `
                <div class="review-question-header">
                    <span class="review-question-number">Question ${index + 1}</span>
                    <span class="review-status">
                        ${isAnswered ? (isCorrect ? '✅' : '❌') : '❓'}
                    </span>
                </div>
                <div class="review-question-text">${question.question}</div>
                <div class="review-options">
                    ${question.options.map((option, optIndex) => {
                        let className = 'review-option';
                        if (optIndex === question.correct) {
                            className += ' correct';
                        } else if (optIndex === userAnswer && !isCorrect) {
                            className += ' selected-wrong';
                        }
                        return `<div class="${className}">${String.fromCharCode(65 + optIndex)}. ${option}</div>`;
                    }).join('')}
                </div>
            `;

            reviewContainer.appendChild(reviewDiv);
        });

        this.showScreen('reviewScreen');
    }

    showResults() {
        this.showScreen('resultsScreen');
    }

    newQuiz() {
        const timerElement = document.getElementById('timer');
        if (timerElement) {
            timerElement.classList.remove('warning');
        }
        
        const nameInput = document.getElementById('studentName');
        if (nameInput) {
            nameInput.value = '';
        }
        
        this.showScreen('welcomeScreen');
    }

    saveResult(result) {
        try {
            let results = JSON.parse(localStorage.getItem('PSPQuizResults') || '[]');
            results.push(result);
            localStorage.setItem('PSPQuizResults', JSON.stringify(results));
        } catch (error) {
            console.error('Error saving result:', error);
        }
    }

    showAdminModal() {
    const modal = document.getElementById('adminModal');
    if (modal) modal.classList.add('active');
    }

    hideAdminModal() {
    const modal = document.getElementById('adminModal');
    const usernameInput = document.getElementById('adminUsername');
    const passwordInput = document.getElementById('adminPassword');
    if (modal) modal.classList.remove('active');
    if (usernameInput) usernameInput.value = '';
    if (passwordInput) passwordInput.value = '';
    }


    adminLogin() {
        const usernameInput = document.getElementById('adminUsername');
        const passwordInput = document.getElementById('adminPassword');
        
        if (!usernameInput || !passwordInput) return;
        
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === 'sam' && password === '2525') {
            this.hideAdminModal();
            this.showAdminDashboard();
        } else {
            alert('Invalid credentials. Please try again.');
        }   

    }

    adminLogout() {
        this.showScreen('welcomeScreen');
    }

    showAdminDashboard() {
        try {
            const results = JSON.parse(localStorage.getItem('PSPQuizResults') || '[]');
            
            const elements = {
                totalStudents: document.getElementById('totalStudents'),
                averageScore: document.getElementById('averageScore'),
                completionRate: document.getElementById('completionRate'),
                studentTableBody: document.getElementById('studentTableBody')
            };

            if (elements.totalStudents) {
                elements.totalStudents.textContent = results.length;
            }
            
            if (elements.averageScore) {
                const averageScore = results.length > 0 
                    ? Math.round(results.reduce((sum, r) => sum + r.score, 0) / results.length)
                    : 0;
                elements.averageScore.textContent = `${averageScore}%`;
            }
            
            if (elements.completionRate) {
                const completionRate = results.length > 0 
                    ? Math.round((results.filter(r => r.correct + r.wrong + r.unanswered === 20).length / results.length) * 100)
                    : 0;
                elements.completionRate.textContent = `${completionRate}%`;
            }

            if (elements.studentTableBody) {
                elements.studentTableBody.innerHTML = '';

                results.slice(-20).reverse().forEach(result => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${result.name}</td>
                        <td>${result.score}%</td>
                        <td>${result.correct}</td>
                        <td>${result.wrong}</td>
                        <td>${result.unanswered}</td>
                        <td>${Math.floor(result.timeTaken / 60)}:${(result.timeTaken % 60).toString().padStart(2, '0')}</td>
                        <td>${result.date}</td>
                    `;
                    elements.studentTableBody.appendChild(row);
                });
            }

            this.showScreen('adminScreen');
        } catch (error) {
            console.error('Error loading admin dashboard:', error);
            alert('Error loading dashboard data.');
        }
    }

    exportCSV() {
        try {
            const results = JSON.parse(localStorage.getItem('PSPQuizResults') || '[]');
            
            if (results.length === 0) {
                alert('No data to export.');
                return;
            }

            const headers = ['Name', 'Score (%)', 'Correct', 'Wrong', 'Unanswered', 'Time Taken', 'Date'];
            const csvContent = [
                headers.join(','),
                ...results.map(result => [
                    `"${result.name}"`,
                    result.score,
                    result.correct,
                    result.wrong,
                    result.unanswered,
                    `"${Math.floor(result.timeTaken / 60)}:${(result.timeTaken % 60).toString().padStart(2, '0')}"`,
                    `"${result.date}"`
                ].join(','))
            ].join('\n');

            const blob = new Blob([csvContent], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `PSP_quiz_results_${new Date().toISOString().split('T')[0]}.csv`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error exporting CSV:', error);
            alert('Error exporting data.');
        }
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new PSPQuizApp();
});