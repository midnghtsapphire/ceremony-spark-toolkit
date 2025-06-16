
export interface CeremonyType {
  value: string;
  label: string;
  icon?: string;
}

export const ceremonyTypes: CeremonyType[] = [
  { value: 'traditional', label: 'Traditional Christian', icon: '⛪' },
  { value: 'non-religious', label: 'Non-Religious', icon: '💍' },
  { value: 'interfaith', label: 'Interfaith', icon: '🤝' },
  { value: 'lgbtqia', label: 'LGBTQIA+', icon: '🏳️‍🌈' },
  { value: 'humorous', label: 'Light & Humorous', icon: '😄' },
  { value: 'cultural', label: 'Cultural/Ethnic', icon: '🌍' },
  { value: 'outdoor', label: 'Outdoor/Nature', icon: '🌿' },
  { value: 'intimate', label: 'Small & Intimate', icon: '❤️' }
];

export const durationOptions = [
  { value: '5-10', label: '5-10 minutes' },
  { value: '10-15', label: '10-15 minutes' },
  { value: '15-20', label: '15-20 minutes' },
  { value: '20-30', label: '20-30 minutes' },
  { value: '30+', label: '30+ minutes' }
];
