// src/providers/SignalRProvider.tsx
import { useMetricsStore } from '@/services/store/useMetricsStore'
import { Metrics } from '@/types/metrics'
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
import { ReactNode, useEffect } from 'react'

export const SignalRProvider = ({ children }: { children: ReactNode }) => {
  const setMetrics = useMetricsStore(state => state.setMetrics);

  useEffect(() => {
    const connection = new HubConnectionBuilder()
      .withUrl('http://localhost:8080/dashboard')
      .configureLogging(LogLevel.Information)
      .withAutomaticReconnect()
      .build();

    connection
      .start()
      .then(() => {
       

        const handleData = (data: { metrics: Metrics }) => {
          if (data?.metrics) {
            setMetrics(data.metrics);
          }
        };

        connection.on('onconnected', handleData);
        connection.on('livedata', handleData);
      })
      .catch(err => console.error('SignalR connection error:', err));

    return () => {
      connection.stop();
    };
  }, [setMetrics]);

  return <>{children}</>;
};
