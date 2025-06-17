import { Metrics } from '@/types/metrics';
import { create } from 'zustand';

type MetricsStore = {
  metrics: Metrics | null;
  setMetrics: (metrics: Metrics) => void;
};

export const useMetricsStore = create<MetricsStore>(set => ({
  metrics: null,
  setMetrics: metrics => set({ metrics }),
}));
