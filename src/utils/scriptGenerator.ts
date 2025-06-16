
interface ScriptData {
  partner1: string;
  partner2: string;
  state?: string;
  personalNotes?: string;
  ceremonyType?: string;
}

export const generateScriptTemplate = (data: ScriptData): string => {
  const { partner1, partner2, state, personalNotes } = data;
  
  return `WEDDING CEREMONY SCRIPT

Officiant: "Welcome, family and friends. We are gathered here today to witness and celebrate the union of ${partner1 || '[Partner 1]'} and ${partner2 || '[Partner 2]'} in marriage.

Marriage is a sacred bond, a commitment to love, honor, and cherish one another through all of life's joys and challenges.

${partner1 || '[Partner 1]'} and ${partner2 || '[Partner 2]'}, you have chosen to share your lives together. Today, in the presence of your loved ones, you make this commitment official.

DECLARATION OF INTENT

Do you, ${partner1 || '[Partner 1]'}, take ${partner2 || '[Partner 2]'} to be your lawfully wedded spouse, to have and to hold, in sickness and in health, for richer or poorer, for better or worse, for as long as you both shall live?

[Response: "I do"]

Do you, ${partner2 || '[Partner 2]'}, take ${partner1 || '[Partner 1]'} to be your lawfully wedded spouse, to have and to hold, in sickness and in health, for richer or poorer, for better or worse, for as long as you both shall live?

[Response: "I do"]

EXCHANGE OF RINGS

The ring is a symbol of eternity, with no beginning and no end. May these rings remind you always of the vows you have taken today.

PRONOUNCEMENT

By the power vested in me by the state of ${state || '[STATE]'}, I now pronounce you married. You may kiss!

${personalNotes ? `\nPersonal Notes:\n${personalNotes}` : ''}`;
};
