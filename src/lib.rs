use wasm_bindgen::prelude::*;
extern crate image;
use image::GenericImageView;

#[wasm_bindgen]
pub fn say(s: &str) -> String {
  println!("The Rust function say() received {}", s);
  let r = String::from("hello ");
  return r + s;
}
#[wasm_bindgen]
pub fn handler_photo(image_data: &[u8]) -> String {
  let kernel: [f32; 9] = [-1f32, -1.0, 0.0, -1.0, 0.0, 1.0, 0.0, 1.0, 1.0];
  let img = image::load_from_memory(image_data).unwrap();
  let a = img.dimensions();
  format!("x: {}, y: {}", a.0, a.1)


  // let a = img.clone().as_mut_rgb8().unwrap();
}