use std::fs;

fn main() {
    let input = fs::read_to_string("input.txt")
        .expect("Something went wrong");

    let mut total = 0;

    for line in input.lines() {
        let params: Vec<&str> = line.split("x").collect();
        
        let a: u64 = params[0].parse::<u64>().expect("Not a number");
        let b: u64 = params[1].parse::<u64>().expect("Not a number");
        let c: u64 = params[2].parse::<u64>().expect("Not a number");

        let mut ordered = [a, b, c];
        ordered.sort();

        total = total + (ordered[0] + ordered[1]) * 2;

        let bow: u64 = a * b * c;

        total = total + bow;
    }

    println!("Total ribbon needed: {}", total);
}
