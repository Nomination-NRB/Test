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

export function resize(data) {
  return request({
    url: "/resize/",
    method: "post",
    data,
  });
}
