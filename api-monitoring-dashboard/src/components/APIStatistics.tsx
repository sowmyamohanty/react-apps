import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  useTheme,
} from '@mui/material';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

// TypeScript type for API usage data
type APIUsageData = {
  date: string;
  requests: number;
};

// Generate realistic sample data for the last 30 days
const generateSampleData = (): APIUsageData[] => {
  const data: APIUsageData[] = [];
  const today = new Date();
  for (let i = 29; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    data.push({
      date: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      requests: Math.floor(Math.random() * 900 + 100), // 100-999 requests
    });
  }
  return data;
};

const apiUsageData: APIUsageData[] = generateSampleData();

const APIStatistics: React.FC = () => {
  const theme = useTheme();

  return (
    <Card elevation={3} sx={{ height: '100%', minWidth: 340 }}>
      <CardContent>
        <Box display="flex" alignItems="center" mb={2}>
          <ShowChartIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h6" component="div" fontWeight={600}>
            API Statistics
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" mb={2}>
          API usage in the last 30 days
        </Typography>
        <Box height={260}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={apiUsageData}
              margin={{ top: 8, right: 16, left: -8, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.divider} />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 12 }}
                interval={4}
                minTickGap={8}
              />
              <YAxis
                allowDecimals={false}
                tick={{ fontSize: 12 }}
                axisLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: theme.palette.background.paper,
                  borderColor: theme.palette.divider,
                  fontSize: 14,
                }}
                labelStyle={{ fontWeight: 500 }}
                formatter={(value: number) => [`${value} requests`, 'Requests']}
              />
              <Legend verticalAlign="top" height={28} />
              <Line
                type="monotone"
                dataKey="requests"
                stroke={theme.palette.primary.main}
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
                name="API Requests"
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default APIStatistics;