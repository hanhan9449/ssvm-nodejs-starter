use wasm_bindgen::prelude::*;
extern crate image;

#[wasm_bindgen]
pub fn say(s: &str) -> String {
  println!("The Rust function say() received {}", s);
  let r = String::from("hello ");
  return r + s;
}
#[wasm_bindgen]
pub fn handler_photo(image_data: &[u8]) -> &[u8] {
  let kernel: [f32; 9] = [-1f32, -1.0, 0.0, -1.0, 0.0, 1.0, 0.0, 1.0, 1.0];
  let img = image::open(image_data).unwrap();
  let a: &[u8] = img.filter3x3(&kernel).as_rgb8().unwrap().to_owned().as_ptr();
  a
}