import request from "@/utils/request";

export function hello() {
  return request({
    url: "/",
    method: "get",
  });
}

export function uploadImage(data) {
  return request({
    url: "/ImageSet/",
    method: "post",
    data,
  });
}

export function getHistArray(data) {
  return request({
    url: "/getHistArray/",
    method: "post",
    data,
  });
}

// 缩小放大
export function resize(data) {
  return request({
    url: "/resize/",
    method: "post",
    data,
  });
}

// 缩小放大
export function rotate(data) {
  return request({
    url: "/rotate/",
    method: "post",
    data,
  });
}
