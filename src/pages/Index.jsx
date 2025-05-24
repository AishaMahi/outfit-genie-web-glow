
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
              <Badge variant="secondary">Welcome!</Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Total Projects</CardTitle>
                  <CardDescription>Active projects in your workspace</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600">12</div>
                  <p className="text-sm text-gray-500 mt-2">+2 from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Completed Tasks</CardTitle>
                  <CardDescription>Tasks finished this week</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">28</div>
                  <p className="text-sm text-gray-500 mt-2">+5 from last week</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Team Members</CardTitle>
                  <CardDescription>Active team members</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600">8</div>
                  <p className="text-sm text-gray-500 mt-2">All members active</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest updates from your projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <p className="text-sm">Project Alpha updated 2 hours ago</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <p className="text-sm">Task completed in Project Beta</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <p className="text-sm">New team member added</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common tasks and shortcuts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button className="w-full justify-start" variant="outline">
                      Create New Project
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      Add Team Member
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      Generate Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="projects" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Projects</CardTitle>
                <CardDescription>Manage your active projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Input placeholder="Search projects..." className="max-w-sm" />
                    <Button>New Project</Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Project Alpha</CardTitle>
                        <CardDescription>Web application development</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Badge>In Progress</Badge>
                        <p className="text-sm text-gray-500 mt-2">Due: March 15, 2024</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Project Beta</CardTitle>
                        <CardDescription>Mobile app design</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Badge variant="secondary">Planning</Badge>
                        <p className="text-sm text-gray-500 mt-2">Due: April 10, 2024</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tasks" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Tasks</CardTitle>
                <CardDescription>Track and manage your tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Input placeholder="Search tasks..." className="max-w-sm" />
                    <Button>Add Task</Button>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Update user interface</p>
                        <p className="text-sm text-gray-500">Project Alpha</p>
                      </div>
                      <Badge>High Priority</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Review design mockups</p>
                        <p className="text-sm text-gray-500">Project Beta</p>
                      </div>
                      <Badge variant="secondary">Medium</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Setup development environment</p>
                        <p className="text-sm text-gray-500">Project Gamma</p>
                      </div>
                      <Badge variant="outline">Low</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>Manage your account and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Profile Information</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <Input placeholder="Enter your email" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Display Name</label>
                        <Input placeholder="Enter your display name" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Preferences</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium mb-1">Bio</label>
                        <Textarea placeholder="Tell us about yourself" />
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button>Save Changes</Button>
                    <Button variant="outline">Cancel</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
