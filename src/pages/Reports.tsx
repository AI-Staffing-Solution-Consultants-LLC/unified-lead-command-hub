
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, Download, TrendingUp, Users, Target } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

const Reports = () => {
  const weeklyData = [
    { day: "Mon", leads: 45, conversions: 12, score: 67 },
    { day: "Tue", leads: 52, conversions: 18, score: 73 },
    { day: "Wed", leads: 38, conversions: 15, score: 69 },
    { day: "Thu", leads: 61, conversions: 22, score: 78 },
    { day: "Fri", leads: 48, conversions: 16, score: 71 },
    { day: "Sat", leads: 29, conversions: 8, score: 62 },
    { day: "Sun", leads: 24, conversions: 6, score: 58 },
  ];

  const sourcePerformance = [
    { source: "LinkedIn", leads: 142, conversion: 18.3, avgScore: 78 },
    { source: "Facebook", leads: 98, conversion: 12.7, avgScore: 65 },
    { source: "ZoomInfo", leads: 76, conversion: 24.1, avgScore: 82 },
    { source: "YellowPages", leads: 54, conversion: 8.9, avgScore: 59 },
    { source: "TinyLanding", leads: 36, conversion: 31.2, avgScore: 85 },
  ];

  const scoreDistribution = [
    { range: "90-100", count: 45, color: "#10b981" },
    { range: "80-89", count: 78, color: "#3b82f6" },
    { range: "70-79", count: 112, color: "#f59e0b" },
    { range: "60-69", count: 89, color: "#ef4444" },
    { range: "0-59", count: 34, color: "#6b7280" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Reports & Analytics</h1>
          <p className="text-gray-600 dark:text-gray-400">Comprehensive lead generation performance insights</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <CalendarDays className="h-4 w-4 mr-2" />
            Date Range
          </Button>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Key Metrics */}
          <div className="grid gap-6 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Leads (7 days)</CardTitle>
                <Users className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">297</div>
                <p className="text-xs text-green-600">+12.3% from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                <Target className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15.8%</div>
                <p className="text-xs text-green-600">+2.1% improvement</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Lead Score</CardTitle>
                <TrendingUp className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">69.7</div>
                <p className="text-xs text-purple-600">+3.2 points</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">AI Interventions</CardTitle>
                <Badge variant="outline">AI</Badge>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">23</div>
                <p className="text-xs text-blue-600">Auto-resolved: 19</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Lead Generation</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="leads" stroke="#3b82f6" strokeWidth={2} />
                    <Line type="monotone" dataKey="conversions" stroke="#10b981" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Score Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={scoreDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="count"
                      label={({ range, count }) => `${range}: ${count}`}
                    >
                      {scoreDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Lead Source Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sourcePerformance.map((source) => (
                  <div key={source.source} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                        <span className="text-sm font-semibold text-blue-700">
                          {source.source.slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-medium">{source.source}</h3>
                        <p className="text-sm text-gray-500">{source.leads} leads generated</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold">{source.conversion}%</div>
                      <div className="text-sm text-gray-500">Avg. Score: {source.avgScore}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sources" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Source Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={sourcePerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="source" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="leads" fill="#3b82f6" name="Leads" />
                  <Bar dataKey="avgScore" fill="#8b5cf6" name="Avg Score" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="leads" stroke="#3b82f6" strokeWidth={3} />
                  <Line type="monotone" dataKey="score" stroke="#f59e0b" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Days</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {weeklyData
                    .sort((a, b) => b.leads - a.leads)
                    .slice(0, 3)
                    .map((day, index) => (
                      <div key={day.day} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                            index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-orange-500'
                          }`}>
                            {index + 1}
                          </div>
                          <span className="font-medium">{day.day}</span>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">{day.leads} leads</div>
                          <div className="text-sm text-gray-500">Score: {day.score}</div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>System Health</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Scraper Uptime</span>
                    <Badge className="bg-green-100 text-green-800">98.7%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>AI Response Time</span>
                    <Badge className="bg-blue-100 text-blue-800">1.2s avg</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Error Rate</span>
                    <Badge className="bg-yellow-100 text-yellow-800">2.1%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Data Quality</span>
                    <Badge className="bg-green-100 text-green-800">96.4%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Reports;
