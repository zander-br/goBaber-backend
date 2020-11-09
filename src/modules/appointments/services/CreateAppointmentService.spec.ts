import { AppError } from '@shared/errors';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: 'valid_id',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('valid_id');
  });

  it('should not be able to create two appointments on the same time', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointmentDate = new Date(2020, 11, 9, 4);

    await createAppointment.execute({
      date: appointmentDate,
      provider_id: 'valid_id',
    });

    expect(
      createAppointment.execute({
        date: appointmentDate,
        provider_id: 'valid_id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
