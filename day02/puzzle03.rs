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

        total = total + (a * b + b * c + c * a) * 2;

        let extra: u64 = *[a * b, b * c, c * a].iter().min().unwrap();

        total = total + extra;
    }

    println!("Total paper needed: {}", total);
}
