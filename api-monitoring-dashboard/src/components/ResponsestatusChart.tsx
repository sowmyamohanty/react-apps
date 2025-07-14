import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  useTheme,
  Divider,
  Tooltip,
} from "@mui/material";
import PieChartIcon from "@mui/icons-material/PieChart";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
} from "recharts";

// Sample data representing API response status codes
const responseStatusData = [
  { name: "200 OK", value: 420 },
  { name: "201 Created", value: 80 },
  { name: "400 Bad Request", value: 30 },
  { name: "401 Unauthorized", value: 15 },
  { name: "404 Not Found", value: 25 },
  { name: "500 Server Error", value: 10 },
];

// Assign colors for each status code
const STATUS_COLORS: Record<string, string> = {
  "200 OK": "#4caf50",
  "201 Created": "#2196f3",
  "400 Bad Request": "#ff9800",
  "401 Unauthorized": "#f44336",
  "404 Not Found": "#9e9e9e",
  "500 Server Error": "#d32f2f",
};

export interface ResponseStatusChartProps {
  data?: typeof responseStatusData;
  title?: string;
}

const ResponseStatusChart: React.FC<ResponseStatusChartProps> = ({
  data = responseStatusData,
  title = "API Response Status Overview",
}) => {
  const theme = useTheme();

  if (!Array.isArray(data) || data.length === 0) {
    return (
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            <PieChartIcon sx={{ mr: 1, verticalAlign: "middle" }} />
            {title}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography color="text.secondary" align="center">
            No data available to display.
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent>
        <Box display="flex" alignItems="center" mb={1}>
          <PieChartIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h6">{title}</Typography>
        </Box>
        <Divider sx={{ mb: 2 }} />
        <Box height={260} minWidth={0}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
                isAnimationActive
              >
                {data.map((entry, idx) => (
                  <Cell
                    key={`cell-${entry.name}`}
                    fill={STATUS_COLORS[entry.name] || theme.palette.primary.main}
                  />
                ))}
              </Pie>
              <RechartsTooltip
                formatter={(value: number, name: string) => [`${value}`, name]}
              />
              <Legend
                verticalAlign="bottom"
                height={36}
                iconType="circle"
                wrapperStyle={{ fontSize: 13 }}
              />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ResponseStatusChart;