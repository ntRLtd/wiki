export function getApiResponse<Res = any>(resp: Record<string, any>): Res {
  if (resp.status >= 200 && resp.status < 300) {
    return resp.data;
  }
  return resp as any;
}
