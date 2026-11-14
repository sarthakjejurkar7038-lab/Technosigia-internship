from rest_framework import viewsets

from .models import Student
from .serializers import StudentSerializer


class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

    def get_queryset(self):
        queryset = Student.objects.all()
        city = self.request.query_params.get("city")
        course = self.request.query_params.get("course")
        if city:
            queryset = queryset.filter(city__iexact=city)
        if course:
            queryset = queryset.filter(course__icontains=course)
        return queryset