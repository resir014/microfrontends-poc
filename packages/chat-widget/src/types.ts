export interface MessageMetadata<T> {
  timestamp: string;
  type: 'text' | 'donation' | 'follow';
  message: T;
}

export interface DonationMetadata {
  from: string;
  amount: number;
}

export interface FollowMetadata {
  username: string;
}
