export default interface ApiResponse<T> {
  status: number;
  success: boolean;
  messageStatus: string;
  results: T;
}
