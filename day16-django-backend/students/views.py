from django.http import JsonResponse
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Student
from .serializers import StudentSerializer


# 1. A plain Django view: returns JSON by hand
def hello(request):
    return JsonResponse({"message": "Hello from Django backend"})


# 2. A DRF function-based API view
@api_view(["GET"])
def api_status(request):
    return Response({"status": "ok", "message": "API is running"})


# 3. DRF class-based API views: list and create
class StudentListCreate(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


# 4. DRF class-based API view: get one, update, delete
class StudentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer