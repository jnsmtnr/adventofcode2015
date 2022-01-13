use std::fs;

fn main() {
    let input = fs::read_to_string("input.txt")
        .expect("Something went wrong");

    let mut floor: i64 = 0;

    for (i, c) in input.chars().enumerate() {            
        if c == '(' {
            floor = floor + 1;
        }
        else if c == ')' {
            floor = floor - 1;
        }

        if floor == -1 {
            println!("{}", i + 1);
            break;
        }
    }
}
