
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertTriangle, Search, RefreshCw, Download } from "lucide-react";

const ErrorLogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [severityFilter, setSeverityFilter] = useState("all");

  const mockErrors = [
    {
      id: "E001",
      timestamp: "2024-01-15 14:32:15",
      severity: "high",
      source: "LinkedIn Scraper",
      message: "Rate limit exceeded: 429 Too Many Requests",
      description: "LinkedIn API responded with rate limit error. Scraper automatically paused for 1 hour.",
      resolved: false,
      aiAction: "Auto-retry scheduled",
    },
    {
      id: "E002",
      timestamp: "2024-01-15 13:45:22",
      severity: "medium",
      source: "Lead Scoring Engine",
      message: "Invalid data format in lead record L00234",
      description: "Missing company field caused scoring algorithm to fail. Record skipped.",
      resolved: true,
      aiAction: "Data sanitized automatically",
    },
    {
      id: "E003",
      timestamp: "2024-01-15 12:18:07",
      severity: "low",
      source: "Facebook Scraper",
      message: "Slow response time detected",
      description: "API response time exceeded 5 seconds threshold. Performance monitoring alert.",
      resolved: true,
      aiAction: "Monitoring increased",
    },
    {
      id: "E004",
      timestamp: "2024-01-15 11:55:44",
      severity: "high",
      source: "Database Connection",
      message: "Connection timeout to Supabase",
      description: "Database connection failed after 30 seconds. Backup connection established.",
      resolved: true,
      aiAction: "Failover activated",
    },
    {
      id: "E005",
      timestamp: "2024-01-15 10:22:31",
      severity: "medium",
      source: "YellowPages Scraper",
      message: "Captcha detection triggered",
      description: "Anti-bot protection detected. Scraper switched to backup proxy.",
      resolved: false,
      aiAction: "Proxy rotation initiated",
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "bg-red-100 text-red-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "low": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const filteredErrors = mockErrors.filter(error => {
    const matchesSearch = error.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         error.source.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeverity = severityFilter === "all" || error.severity === severityFilter;
    return matchesSearch && matchesSeverity;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Error Logs</h1>
          <p className="text-gray-600 dark:text-gray-400">Monitor system errors and AI agent responses</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Error Statistics */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Errors (24h)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{mockErrors.length}</div>
            <p className="text-xs text-gray-500">+2 from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">High Severity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {mockErrors.filter(e => e.severity === 'high').length}
            </div>
            <p className="text-xs text-red-500">Needs attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Auto-Resolved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {mockErrors.filter(e => e.resolved).length}
            </div>
            <p className="text-xs text-green-500">By AI agents</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Resolution Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              {Math.round((mockErrors.filter(e => e.resolved).length / mockErrors.length) * 100)}%
            </div>
            <p className="text-xs text-blue-500">Last 24 hours</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search errors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={severityFilter} onValueChange={setSeverityFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Severity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Severity</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Error List */}
      <div className="space-y-4">
        {filteredErrors.map((error) => (
          <Card key={error.id} className={`border-l-4 ${
            error.severity === 'high' ? 'border-l-red-500' :
            error.severity === 'medium' ? 'border-l-yellow-500' :
            'border-l-blue-500'
          }`}>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <AlertTriangle className={`h-5 w-5 ${
                    error.severity === 'high' ? 'text-red-500' :
                    error.severity === 'medium' ? 'text-yellow-500' :
                    'text-blue-500'
                  }`} />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{error.message}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{error.source} • {error.timestamp}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={getSeverityColor(error.severity)}>
                    {error.severity.toUpperCase()}
                  </Badge>
                  <Badge variant={error.resolved ? "default" : "destructive"}>
                    {error.resolved ? "RESOLVED" : "ACTIVE"}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-700 dark:text-gray-300 mb-3">{error.description}</p>
              <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-300">AI Agent Action:</span>
                  <span className="text-sm text-blue-600 dark:text-blue-400">{error.aiAction}</span>
                </div>
                {!error.resolved && (
                  <Button size="sm" variant="outline">
                    Force Resolve
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ErrorLogs;
