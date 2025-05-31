"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ScheduleService } from '@/features/schedules/services/schedule.service';
import React, { useEffect } from 'react';
import { toast } from 'sonner';


export default function NotificationContainer({ notification }: { notification: NotificationEvent[] }) {
  const [selectedDoctorId, setSelectedDoctorId] = React.useState<string | null>(null);
  const [scheduleBefore, setScheduleBefore] = React.useState<Schedule | null>(null);
  const [scheduleAfter, setScheduleAfter] = React.useState<Schedule | null>(null);
  useEffect(() => {
    const fetchPreview = async () => {
      if (selectedDoctorId) {
        const data = await ScheduleService.getPreviewNextSchedule(selectedDoctorId);
        setScheduleBefore(data.schedule);
        setScheduleAfter(data.next_schedule);

      }
    };
    fetchPreview();
  }, [selectedDoctorId])

  const handleCancel = () => {
    setSelectedDoctorId(null);
    setScheduleBefore(null);
    setScheduleAfter(null);
  };

  const handleSubmit = async () => {
    if (!scheduleBefore || !scheduleAfter) return;
    try {
      await ScheduleService.updateSchedule(scheduleBefore?.id ?? 0, scheduleAfter?.start_time, scheduleAfter?.end_time)
      toast.success('Schedule updated successfully');
      setSelectedDoctorId(null);
      setScheduleBefore(null);
      setScheduleAfter(null);
    } catch (error) {
      toast.error('Failed to update schedule');
    }

  };
  return (
    <main className="container py-10 md:py-20 w-full">
      <h1 className="text-2xl font-bold mb-6">Notification</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Body</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {notification.map((notif) => (
            <TableRow key={notif.id}>
              <TableCell className="font-medium">{notif.title}</TableCell>
              <TableCell>{notif.body}</TableCell>
              <TableCell>{notif.type}</TableCell>
              <TableCell>
                {notif.is_read ? (
                  <span className="text-green-600">Read</span>
                ) : (
                  <span className="text-red-600">Unread</span>
                )}
              </TableCell>
              <TableCell>{new Date(notif.created_at).toLocaleString()}</TableCell>
              <TableCell className="text-right">
                {notif.type == "Tingkatkan Jadwal Dokter Berikutnya" ? (<Button onClick={() => {
                  setSelectedDoctorId(notif.metadata.doctor_id);
                }}>Optimize</Button>) : null}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {scheduleBefore && scheduleAfter && (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
          <div>
            <label className="block mb-1 font-semibold">Current Schedule</label>
            <Input disabled value={scheduleBefore.start_time ?? ''} />
            <Input disabled value={scheduleBefore.end_time ?? ''} />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Optimized Schedule</label>
            <Input name="optimizedSchedule" value={scheduleAfter.start_time ?? ''} readOnly />
            <Input name="optimizedSchedule" value={scheduleAfter.end_time ?? ''} readOnly />
          </div>
          <div className="col-span-2 flex gap-4 mt-4">
            <Button onClick={handleSubmit}>Submit</Button>
            <Button variant="outline" onClick={handleCancel}>Cancel</Button>
          </div>
        </section>
      )}
    </main>
  );
}
