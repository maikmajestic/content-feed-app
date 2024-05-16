import axios from 'axios';
import { ContentCard } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
const MOCKUP_DATA_FILE_PATH = 'http://localhost:3000/mockupData.json';

export async function fetchContent(): Promise<{ data: ContentCard[] | null; error: string | null }> {
  noStore();

  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    let data: ContentCard[] | null = null;

    if (process.env.USE_API_ENDPOINT === 'true') {
      if (!apiEndpoint){
        return { data: [], error: null };
      }
      const response = await axios.get(apiEndpoint);
      data = response.data.contentCards;
    } else {
      const response = await fetch(MOCKUP_DATA_FILE_PATH);
      if (response.ok) {
        data = await response.json();
      } else {
        throw new Error(`Failed to load data from ${MOCKUP_DATA_FILE_PATH}`);
      }
    }

    if (data && Array.isArray(data)) {
      data.sort((a, b) => b.metadata.priority - a.metadata.priority);
    }
    
    return { data, error: null };
  } catch (error) {
    console.error('Error fetching content:', error);
    return { data: null, error: 'Failed to fetch content.' };
  }
}
