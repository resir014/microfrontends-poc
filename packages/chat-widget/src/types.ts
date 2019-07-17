export interface MessageMetadata<T = any> {
  timestamp: string;
  type: 'text' | 'donation' | 'follow';
  data: T;
}

export interface DonationMetadata {
  from: string;
  amount: number;
  message: string;
}

export interface TextMetadata {
  from: string;
  message: string;
}

export interface FollowMetadata {
  username: string;
}
