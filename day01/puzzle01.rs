use std::fs;

fn main() {
    let input = fs::read_to_string("input.txt")
        .expect("Something went wrong");

    let mut floor: i64 = 0;

    for c in input.chars() {            
        if c == '(' {
            floor = floor + 1;
        }
        else if c == ')' {
            floor = floor - 1;
        }
    }

    println!("{}", floor);
}
