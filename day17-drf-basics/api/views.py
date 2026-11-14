from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import StudentSerializer

# Sample data kept in memory (no database yet)
STUDENTS = [
    {"id": 1, "name": "Aarav Patil", "email": "aarav@example.com",
     "course": "Python", "city": "Pune"},
    {"id": 2, "name": "Diya Sharma", "email": "diya@example.com",
     "course": "React", "city": "Mumbai"},
    {"id": 3, "name": "Rohan Mehta", "email": "rohan@example.com",
     "course": "Data Analytics", "city": "Pune"},
    {"id": 4, "name": "Sneha Kulkarni", "email": "sneha@example.com",
     "course": "Django", "city": "Nagpur"},
    {"id": 5, "name": "Karan Singh", "email": "karan@example.com",
     "course": "SQL", "city": "Delhi"},
]


# 1. API root: lists the endpoints
@api_view(["GET"])
def api_root(request):
    return Response({
        "hello": "/api/hello/",
        "students": "/api/students/",
    })


# 2. Hello World endpoint
@api_view(["GET", "POST"])
def hello(request):
    if request.method == "POST":
        name = request.data.get("name", "World")          # from the JSON body
    else:
        name = request.query_params.get("name", "World")  # from ?name=...
    return Response({"message": f"Hello, {name}!"})


# 3. Student list and create
class StudentList(APIView):
    def get(self, request):
        students = STUDENTS
        city = request.query_params.get("city")
        if city:
            students = [s for s in STUDENTS if s.get("city", "").lower() == city.lower()]
        serializer = StudentSerializer(students, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            new_student = {"id": len(STUDENTS) + 1, **serializer.validated_data}
            STUDENTS.append(new_student)
            return Response(
                StudentSerializer(new_student).data,
                status=status.HTTP_201_CREATED,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# 4. One student
class StudentDetail(APIView):
    def get(self, request, pk):
        for student in STUDENTS:
            if student["id"] == pk:
                return Response(StudentSerializer(student).data)
        return Response(
            {"error": "Student not found"},
            status=status.HTTP_404_NOT_FOUND,
        )