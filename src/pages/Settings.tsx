
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const Settings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
        <p className="text-gray-600 dark:text-gray-400">Configure system preferences and integrations</p>
      </div>

      <Tabs defaultValue="scrapers" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="scrapers">Scrapers</TabsTrigger>
          <TabsTrigger value="scoring">Scoring</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="scrapers" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Scraper Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { name: "LinkedIn Scraper", enabled: true, rate: "50/hour" },
                { name: "Facebook Scraper", enabled: true, rate: "30/hour" },
                { name: "YellowPages Scraper", enabled: false, rate: "100/hour" },
                { name: "ZoomInfo Scraper", enabled: true, rate: "25/hour" },
                { name: "TinyLanding Scraper", enabled: true, rate: "75/hour" },
              ].map((scraper) => (
                <div key={scraper.name} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <h3 className="font-medium">{scraper.name}</h3>
                    <p className="text-sm text-gray-500">Rate limit: {scraper.rate}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Switch checked={scraper.enabled} />
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scoring" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Lead Scoring Engine</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company-weight">Company Size Weight</Label>
                  <Input id="company-weight" type="number" defaultValue="25" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry-weight">Industry Match Weight</Label>
                  <Input id="industry-weight" type="number" defaultValue="20" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="engagement-weight">Engagement Weight</Label>
                  <Input id="engagement-weight" type="number" defaultValue="30" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-weight">Contact Quality Weight</Label>
                  <Input id="contact-weight" type="number" defaultValue="25" />
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Auto-score new leads</Label>
                  <Switch checked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Re-score leads daily</Label>
                  <Switch checked />
                </div>
              </div>
              <Button>Update Scoring Model</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Email notifications for new leads</Label>
                  <Switch checked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Slack alerts for errors</Label>
                  <Switch checked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Daily summary reports</Label>
                  <Switch checked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>High-score lead alerts</Label>
                  <Switch checked />
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label htmlFor="slack-webhook">Slack Webhook URL</Label>
                <Input id="slack-webhook" placeholder="https://hooks.slack.com/..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notification-email">Notification Email</Label>
                <Input id="notification-email" type="email" placeholder="admin@company.com" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>API Integrations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { name: "Supabase Database", status: "connected", description: "Main data storage" },
                { name: "GraphQL API", status: "connected", description: "Data querying interface" },
                { name: "GitHub CI/CD", status: "connected", description: "Automated deployments" },
                { name: "Netlify Hosting", status: "connected", description: "Web hosting platform" },
                { name: "Pydantic RAG Agents", status: "pending", description: "AI oversight system" },
              ].map((integration) => (
                <div key={integration.name} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <h3 className="font-medium">{integration.name}</h3>
                    <p className="text-sm text-gray-500">{integration.description}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      integration.status === 'connected' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {integration.status}
                    </span>
                    <Button variant="outline" size="sm">
                      {integration.status === 'connected' ? 'Manage' : 'Connect'}
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Require 2FA for admin access</Label>
                  <Switch checked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Session timeout (hours)</Label>
                  <Input className="w-20" type="number" defaultValue="8" />
                </div>
                <div className="flex items-center justify-between">
                  <Label>API rate limiting</Label>
                  <Switch checked />
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Data Retention Policy</Label>
                <select className="w-full p-2 border rounded">
                  <option>30 days</option>
                  <option>90 days</option>
                  <option>1 year</option>
                  <option>Indefinite</option>
                </select>
              </div>
              <Button variant="destructive">Reset API Keys</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
