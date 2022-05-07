export const urls = {
    origin: (domain: string) => (channel: string): string => `https://${channel}.${domain}`,
};
