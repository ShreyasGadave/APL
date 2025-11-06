import { useState } from "react";
import { notices } from "@/data/mockData";
import { Bell, FileText } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const NoticeBoard = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Bell className="h-8 w-8 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Notice Board</h2>
          </div>
          <p className="text-muted-foreground">Important announcements and updates</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="students" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="students" className="text-base">For Students</TabsTrigger>
              <TabsTrigger value="staff" className="text-base">For Staff</TabsTrigger>
            </TabsList>

            <TabsContent value="students" className="space-y-4">
              {notices.students.map((notice, index) => (
                <Card
                  key={notice.id}
                  className="hover:shadow-md transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center">
                          <FileText className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{notice.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{notice.description}</p>
                        <p className="text-xs text-accent font-medium">{notice.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="staff" className="space-y-4">
              {notices.staff.map((notice, index) => (
                <Card
                  key={notice.id}
                  className="hover:shadow-md transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center">
                          <FileText className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{notice.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{notice.description}</p>
                        <p className="text-xs text-accent font-medium">{notice.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>

          <div className="text-center mt-8">
            <button className="px-8 py-3 border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors font-medium">
              View All Notices
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticeBoard;
