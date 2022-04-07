export default interface ApiResponse<T, M> {
  status: number;
  success: boolean;
  messageStatus: string;
  results: T;
  result: M;
}
