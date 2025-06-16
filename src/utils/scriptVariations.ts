
interface ScriptVariation {
  id: string;
  name: string;
  tone: 'formal' | 'casual' | 'romantic' | 'humorous' | 'spiritual';
  description: string;
}

export const scriptVariations: Record<string, ScriptVariation[]> = {
  traditional: [
    { id: 'traditional-formal', name: 'Classic Traditional', tone: 'formal', description: 'Time-honored, formal religious ceremony' },
    { id: 'traditional-warm', name: 'Warm Traditional', tone: 'romantic', description: 'Traditional with personal warmth' },
    { id: 'traditional-simple', name: 'Simple Traditional', tone: 'casual', description: 'Traditional but streamlined' }
  ],
  'non-religious': [
    { id: 'secular-formal', name: 'Elegant Secular', tone: 'formal', description: 'Sophisticated non-religious ceremony' },
    { id: 'secular-casual', name: 'Relaxed Celebration', tone: 'casual', description: 'Laid-back, personal vows focus' },
    { id: 'secular-romantic', name: 'Romantic Journey', tone: 'romantic', description: 'Love story focused ceremony' }
  ],
  interfaith: [
    { id: 'interfaith-balanced', name: 'Balanced Traditions', tone: 'formal', description: 'Equal representation of both faiths' },
    { id: 'interfaith-unity', name: 'Unity Focused', tone: 'spiritual', description: 'Common spiritual themes' },
    { id: 'interfaith-modern', name: 'Modern Interfaith', tone: 'casual', description: 'Contemporary approach to traditions' }
  ],
  lgbtqia: [
    { id: 'lgbtq-celebration', name: 'Pride Celebration', tone: 'romantic', description: 'Joyful celebration of love' },
    { id: 'lgbtq-formal', name: 'Formal Equality', tone: 'formal', description: 'Traditional structure, inclusive language' },
    { id: 'lgbtq-personal', name: 'Personal Journey', tone: 'casual', description: 'Focus on personal love story' }
  ],
  humorous: [
    { id: 'humorous-light', name: 'Light & Fun', tone: 'humorous', description: 'Gentle humor throughout' },
    { id: 'humorous-playful', name: 'Playfully Romantic', tone: 'romantic', description: 'Sweet humor with romance' },
    { id: 'humorous-casual', name: 'Casual Comedy', tone: 'casual', description: 'Relaxed with funny moments' }
  ],
  cultural: [
    { id: 'cultural-traditional', name: 'Heritage Honor', tone: 'formal', description: 'Deep cultural traditions' },
    { id: 'cultural-fusion', name: 'Cultural Fusion', tone: 'spiritual', description: 'Blending multiple cultures' },
    { id: 'cultural-modern', name: 'Modern Heritage', tone: 'casual', description: 'Contemporary cultural elements' }
  ],
  outdoor: [
    { id: 'outdoor-nature', name: 'Nature Celebration', tone: 'spiritual', description: 'Earth and nature focused' },
    { id: 'outdoor-rustic', name: 'Rustic Romance', tone: 'romantic', description: 'Country charm and warmth' },
    { id: 'outdoor-adventure', name: 'Adventure Love', tone: 'casual', description: 'For adventurous couples' }
  ],
  intimate: [
    { id: 'intimate-personal', name: 'Personal & Private', tone: 'romantic', description: 'Deeply personal small ceremony' },
    { id: 'intimate-simple', name: 'Simply Beautiful', tone: 'casual', description: 'Elegant simplicity' },
    { id: 'intimate-heartfelt', name: 'Heartfelt Vows', tone: 'spiritual', description: 'Emotion-focused ceremony' }
  ]
};

export const getVariationsByType = (ceremonyType: string): ScriptVariation[] => {
  return scriptVariations[ceremonyType] || [];
};
